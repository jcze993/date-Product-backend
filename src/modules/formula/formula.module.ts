import { Module } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { FormulaController } from './formula.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulaSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Formula', schema: FormulaSchema }]),
  ],
  controllers: [FormulaController],
  providers: [FormulaService],
})
export class FormulaModule {}
