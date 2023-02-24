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

async updatePace() {
  const users = await this.prisma.user.findMany({
    include: {
      Cursus_user: true,
      Project_users: true,
    }
  });
  for (const user of users){
    let latest = null;
    for (const project of user.Project_users){
      if (latest === null || project.marked_at > latest.marked_at){
        latest = project;
      }
    }
    let core;
    for (const cursus of user.Cursus_user){
      if (cursus.cursus_id === 21){
        core = new Date(cursus.begin_at);
      }
    }
    let date_diff;
let date_now = new Date();
if (core)
  date_diff = (date_now.getTime() - core.getTime()) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
else
  date_diff = 0;
let pace = 0;
if (latest && latest.name){
  if (latest.name === "Libft"){
    if ((date_diff ) <= 8)
      pace = 8;
    else if ((date_diff ) <= 13)
      pace = 12;
    else if ((date_diff ) <= 18)
      pace = 15;
    else if ((date_diff ) <= 24)
      pace = 18;
    else
      pace = 22;
  }
  else if (latest.name === "ft_printf" || latest.name === "get_next_line" || latest.name === "Born2beroot"){
    if ((date_diff ) <= 32)
      pace = 8;
    else if ((date_diff ) <= 48)
      pace = 12;
    else if ((date_diff ) <= 60)
      pace = 15;
    else if ((date_diff ) <= 72)
      pace = 18;
    else
      pace = 22;
  }
  else if (latest.name === "so_long" || latest.name === "Exam Rank 02" || latest.name === "pipex" || latest.name === "push_swap" || latest.name === "minitalk" || latest.name === "fract-ol" || latest.name === "FdF"){
    if ((date_diff ) <= 54)
      pace = 8;
    else if ((date_diff ) <= 81)
      pace = 12;
    else if ((date_diff ) <= 101)
      pace = 15;
    else if ((date_diff ) <= 121)
      pace = 18;
    else
      pace = 22;
  }
  else if (latest.name === "Exam Rank 03" || latest.name === "minishell" || latest.name === "Philosophers"){
    if ((date_diff ) <= 90)
      pace = 8;
    else if ((date_diff ) <= 134)
      pace = 12;
    else if ((date_diff ) <= 168)
      pace = 15;
    else if ((date_diff ) <= 201)
      pace = 18;
    else
      pace = 22;
  }
  else if (latest.name === "Exam Rank 04" || latest.name === "cub3d" || latest.name === "NetPractice" || latest.name.includes("CPP Module")){
    if ((date_diff ) <= 141)
      pace = 8;
    else if ((date_diff ) <= 211)
      pace = 12;
    else if ((date_diff ) <= 264)
      pace = 15;
    else if ((date_diff ) <= 316)
      pace = 18;
    else
      pace = 22;
  }
  else if (latest.name === "Exam Rank 05" || latest.name === "ft_containers" || latest.name === "ft_irc" || latest.name === "webserv"){
    if ((date_diff ) <= 212)
      pace = 8;
    else if ((date_diff ) <= 318)
      pace = 12;
    else if ((date_diff ) <= 398)
      pace = 15;
    else if ((date_diff ) <= 478)
      pace = 18;
    else
      pace = 22;
  }
}

    await this.updatePaceDatabase(pace, user);
}
}

async updatePaceDatabase(pace, user) {
  await this.prisma.user.update({
    where: {
      login: user.login,
    },
    data: {
      pace: pace,
    },
  });
}



}