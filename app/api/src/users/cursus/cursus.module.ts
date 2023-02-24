import { CursusService } from './cursus.service';
import { CursusController } from './cursus.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CursusController],
  providers: [CursusService],
})
export class CursusModule {}
