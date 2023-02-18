import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UpdateController],
  providers: [UpdateService],
})
export class UpdateModule {}
