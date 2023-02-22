import { Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get('/api/users/:login')
    async getUserByLogin(@Param('login') login: string) {
        return await this.userService.getUserByLogin(login);
    }

}