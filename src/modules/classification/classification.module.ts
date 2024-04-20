import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassificationSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Classification', schema: ClassificationSchema },
    ]),
  ],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class ClassificationModule {}
