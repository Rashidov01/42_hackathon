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

}
