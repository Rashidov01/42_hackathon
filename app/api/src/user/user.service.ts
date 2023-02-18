import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

    async getUserByLogin(login: string) {
        return await this.prisma.user.findUnique({
            where: {
                login: login,
            },
        });
    }

}
