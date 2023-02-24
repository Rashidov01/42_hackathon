import { Controller, Get, Param, Patch } from '@nestjs/common';
import { CursusService } from './cursus.service';

@Controller('/api/users/:login/cursus')
export class CursusController {
  constructor(private readonly cursusService: CursusService) {}

    @Get()
    async getCursusByLogin(@Param('login') login: string) {
        return await this.cursusService.getCursusByLogin(login);
    }

}