import { Module } from '@nestjs/common';
import { NutrientService } from './nutrient.service';
import { NutrientController } from './nutrient.controller';
import { NutrientSchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Nutrient', schema: NutrientSchema }]),
  ],
  controllers: [NutrientController],
  providers: [NutrientService],
})
export class NutrientModule {}
