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
            await self.prisma.user.upsert({
                where: {
                  id: jsonData.id,
                },
                update: {},
                create: {
                  id: jsonData.id,
                  user_id: jsonData.user_id,
                  active: jsonData.active,
                  usual_full_name: jsonData.usual_full_name,
                  usual_first_name: jsonData.usual_first_name,
                  url: jsonData.url,
                  kind: jsonData.kind,
                  alumnized_at: jsonData.alumnized_at,
                  alumni: jsonData.alumni,
                  titles: jsonData.titles,
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
            console.log(`User ${jsonData.login} created.`);
          } catch (error) {
            console.error(`Error creating ${jsonData.login} user`);
          }
        });
      });
    });
  }

}