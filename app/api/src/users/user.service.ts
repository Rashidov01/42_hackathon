import { NotFoundException } from '@nestjs/common';
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
                Cursus_user: true,
            }
        });
        if (!user) {
            throw new NotFoundException('User not found');
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

    async getUsersSortBy(key: string) {
    //     try {
    //     const user = await this.prisma.user.findMany({
    //         orderBy: {
    //             [key]: 'desc',
    //         },
    //     });
    //     if (user) {
    //         return user;
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
    try {
        const user2 = await this.prisma.user.findMany({
            select: {
                Cursus_user: true
            }
        });
        const sorted = user2.sort((a, b) => { return a.Cursus_user[0].level - b.Cursus_user[0].level });
            return sorted;
    } catch (e) {
        console.log(e);
    }
        // throw new NotFoundException('User not found');
    }

}
