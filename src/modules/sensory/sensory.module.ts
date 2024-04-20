import { Module } from '@nestjs/common';
import { SensoryService } from './sensory.service';
import { SensoryController } from './sensory.controller';
import { SensorySchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sensory', schema: SensorySchema }]),
  ],
  controllers: [SensoryController],
  providers: [SensoryService],
})
export class SensoryModule {}
