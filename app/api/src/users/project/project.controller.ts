import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('/api/users/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  
    @Get('/:name/news')
    async getNewsByProjectName(@Param('name') name: string) {
        return await this.projectService.getNewsByProjectName(name);
    }
  
    @Get('/:name/:status')
    async getUsersByProjectName(@Param('name') name: string, @Param('status') status: string) {
        return await this.projectService.getUsersByProjectName(name, status);
    }

}