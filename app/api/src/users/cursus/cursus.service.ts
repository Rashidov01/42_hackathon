import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CursusService {
  prisma = new PrismaClient();

  async getCursusByLogin(login: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        login: login,
      },
      include: {
        Cursus_user: true,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user.Cursus_user;
  }

}