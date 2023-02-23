import { Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Get('/:login')
    async getUserByLogin(@Param('login') login: string) {
        return await this.userService.getUserByLogin(login);
    }

    @Get('/:login/projects')
    async getUsersProjects(@Param('login') login: string) {
        return await this.userService.getUsersProjects(login);
    }

    @Get('/:login/projects/:project')
    async getUsersOneProject(@Param('login') login: string, @Param('project') project: string) {
        return await this.userService.getUsersOneProject(login, project);
    }

}