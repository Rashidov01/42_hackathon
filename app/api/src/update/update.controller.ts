import { Controller, Get, Patch } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller()
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}

  @Patch('/api/update')
  async Update() {
    return await this.updateService.updateAllUsers();
  }

}
