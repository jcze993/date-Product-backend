import { Module } from '@nestjs/common';
import { ParametersFinishedService } from './parameters_finished.service';
import { ParametersFinishedController } from './parameters_finished.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParameterSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parameter', schema: ParameterSchema }]),
  ],
  controllers: [ParametersFinishedController],
  providers: [ParametersFinishedService],
})
export class ParametersFinishedModule {}
