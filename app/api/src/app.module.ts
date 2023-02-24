import { SearchModule } from './search/search.module';
import { UserModule } from './users/user.module';
import { UpdateModule } from './update/update.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UpdateModule, AuthModule, UserModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
