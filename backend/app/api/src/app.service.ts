import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  prisma = new PrismaClient();
  getHello() {
    return this.prisma.user.findMany();
  }
}
