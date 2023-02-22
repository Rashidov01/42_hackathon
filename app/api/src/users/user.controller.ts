import { Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get('/:login')
    async getUserByLogin(@Param('login') login: string) {
        return await this.userService.getUserByLogin(login);
    }

}