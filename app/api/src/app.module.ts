import { UserModule } from './user/user.module';
import { UpdateModule } from './update/update.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UpdateModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
