import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UpdateService {
  prisma = new PrismaClient();
  
  async updateAllUsers() {
  const directoryPath = './fetcher/users';
  const jsonFiles: string[] = [];
  const self = this;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    files.forEach(function (file) {
      if (path.extname(file) === '.json') {
        jsonFiles.push(path.join(directoryPath, file));
      }
    });
    jsonFiles.forEach(async function (jsonFile) {
      fs.readFile(jsonFile, async function (err, data) {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        const jsonData = JSON.parse(data.toString());
        try {
          const createProjectsUsers = async (jsonData) => {
              await Promise.all(
                jsonData.projects_users.map(async (hobby) => {
                  await self.prisma.projectUser.upsert({
                    where: {
                      id: hobby.id,
                    },
                    update: {},
                    create: {
                      id: hobby.id,
                      occurrence: hobby.occurrence,
                      final_mark: hobby.final_mark,
                      status: hobby.status,
                      validated: hobby.validated,
                      current_team_id: hobby.current_team_id,
                      marked_at: hobby.marked_at,
                      marked: hobby.marked,
                      retriable_at: hobby.retriable_at,
                      created_at: hobby.created_at,
                      updated_at: hobby.updated_at,
                      name: hobby.project.name,
                      user: {
                        connect: { id: jsonData.id },
                      },
                    },
                  });
                })
              );
          };

          const createCursusUsers = async (jsonData) => {
              await Promise.all(
                jsonData.cursus_users.map(async (hobby) => {
                  await self.prisma.cursusUser.upsert({
                    where: {
                      id: hobby.id,
                    },
                    update: {},
                    create: {
                      id: hobby.id,
                      cursus_id: hobby.cursus.id,
                      slug: hobby.cursus.slug,
                      grade: hobby.grade,
                      level: hobby.level,
                      blackholed_at: hobby.blackholed_at,
                      begin_at: hobby.begin_at,
                      end_at: hobby.end_at,
                      has_coalition: hobby.has_coalition,
                      created_at:hobby.created_at,
                      updated_at: hobby.updated_at,
                      user: {
                        connect: { id: jsonData.id },
                      },
                    },
                  });
                })
              );
          };

          await self.prisma.user.upsert({
            where: {
              id: jsonData.id,
            },
            update: {},
            create: {
              id: jsonData.id,
              active: jsonData.active,
              usual_full_name: jsonData.usual_full_name,
              usual_first_name: jsonData.usual_first_name,
              url: jsonData.url,
              kind: jsonData.kind,
              alumnized_at: jsonData.alumnized_at,
              image_url: jsonData.image.link,
              alumni: jsonData.alumni,
              login: jsonData.login,
              email: jsonData.email,
              first_name: jsonData.first_name,
              last_name: jsonData.last_name,
              phone: jsonData.phone,
              displayname: jsonData.displayname,
              location: jsonData.location,
              wallet: jsonData.wallet,
              correction_point: jsonData.correction_point,
              pool_month: jsonData.pool_month,
              pool_year: jsonData.pool_year,
              staff: false,
              anonymize_date: jsonData.anonymize_date,
              data_erasure_date: jsonData.data_erasure_date,
              created_at: jsonData.created_at,
              updated_at: jsonData.updated_at,
            },
          });

          await createProjectsUsers(jsonData);
          await createCursusUsers(jsonData);

          console.log(`User ${jsonData.login} created.`);
        } catch (error){
          // console.log(error);
          console.error(`Error creating ${jsonData.login} user`);
        }
      });
    });
  });
}


}