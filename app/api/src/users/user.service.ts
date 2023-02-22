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

}
