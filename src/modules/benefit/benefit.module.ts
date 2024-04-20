import { Module } from '@nestjs/common';
import { BenefitService } from './benefit.service';
import { BenefitController } from './benefit.controller';
import { BenefitSchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Benefit', schema: BenefitSchema }]),
  ],
  controllers: [BenefitController],
  providers: [BenefitService],
})
export class BenefitModule {}
