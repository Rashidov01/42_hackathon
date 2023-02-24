import { CursusModule } from './cursus/cursus.module';
import { ProjectModule } from './project/project.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProjectModule, CursusModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
