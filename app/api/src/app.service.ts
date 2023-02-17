import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { promisify } from 'util';

@Injectable()
export class AppService {
  prisma = new PrismaClient();
  getHello() {
    return this.prisma.user.findMany();
  }

  async getUsers() {
    const Token = '97c88674def2550c9c95595e8bff31cc54a6c41e29a6026a9d92eaa95f220d02';
    let allUsers = [];
    let page_nb = 1;
    while (true) {
      const { data: users } = await axios.get(
        `https://api.intra.42.fr/v2/campus/43/users`,
        {
          params: {
            per_page: 100,
            page: page_nb,
          },
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      if (users.length < 1) {
        return allUsers;
      }
      const usersLogin = users.map((user) => user.login);
      allUsers = [...allUsers, ...usersLogin];
      page_nb++;
    }
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  async getAllInfo() {
    const users = await this.getUsers();
    let Token = '270d5bf1e8b5f706948712d4bf73b1a35521c2d497235b238d453753263dd824';
    let allUsers = [];
    let count = 0;
    for (const user of users) {
      const { data } = await axios.get(
        `https://api.intra.42.fr/v2/users/${user}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      count++;
      if (count === 750){
        Token = '4bb6b9556b2874dd12eabd50f692775e57e5cd9d99dd6b0b86f5638cca4ace2c';
      }
      await this.sleep(1000);
      allUsers = [...allUsers, data];
      await promisify(setTimeout)(1000);
    }
    return allUsers;
  }
  
}
  

// }
