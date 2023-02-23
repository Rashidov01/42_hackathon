import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
