import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

    async getUserByLogin(login: string) {
        const user =  await this.prisma.user.findUnique({
            where: {
                login: login,
            },
            include: {
                Project_users: true,
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async getUsersProjects(login: string) {
        const user = await this.getUserByLogin(login);
        return user.Project_users;
    }

    async getUsersOneProject(name: string, projectName: string) {
        const user = await this.getUserByLogin(name);
        return user.Project_users.find((project) => project.name === projectName);
    }

    async getUsersProjectStatus(name: string, status: string) {
        const user = await this.getUserByLogin(name);
        return user.Project_users.filter((project) => project.status === status);
    }

}
