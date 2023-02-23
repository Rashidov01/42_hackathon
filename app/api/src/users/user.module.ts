import { ProjectModule } from './project/project.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProjectModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
