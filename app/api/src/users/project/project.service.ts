import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProjectService {
  prisma = new PrismaClient();

  async getUsersByProjectName(name: string, status: string) {
    return await this.prisma.user.findMany({
      where: {
        Project_users: {
          some: {
            name: name,
            status: status,
          },
        },
      },
    });
  }

  async getNewsByProjectName(name: string) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 60);
    yesterday.setUTCHours(0, 0, 0, 0);
    const projects = await this.prisma.user.findMany({
      where: {
        Project_users: {
          some: {
            name: name,
            marked_at: {
              gte: yesterday.toISOString(),
              lt: new Date().toISOString(),
            },
          },
        },
      },
    });
    return projects;
  }
  
  

}
