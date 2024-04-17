import { Module } from '@nestjs/common';
import { ParametersFinishedService } from './parameters_finished.service';
import { ParametersFinishedController } from './parameters_finished.controller';

@Module({
  controllers: [ParametersFinishedController],
  providers: [ParametersFinishedService],
})
export class ParametersFinishedModule {}
