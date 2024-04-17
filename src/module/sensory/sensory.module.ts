import { Module } from '@nestjs/common';
import { SensoryService } from './sensory.service';
import { SensoryController } from './sensory.controller';

@Module({
  controllers: [SensoryController],
  providers: [SensoryService],
})
export class SensoryModule {}
