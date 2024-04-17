import { Module } from '@nestjs/common';
import { FlowChartService } from './flow_chart.service';
import { FlowChartController } from './flow_chart.controller';

@Module({
  controllers: [FlowChartController],
  providers: [FlowChartService],
})
export class FlowChartModule {}
