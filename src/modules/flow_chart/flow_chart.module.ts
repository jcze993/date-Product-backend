import { Module } from '@nestjs/common';
import { FlowChartService } from './flow_chart.service';
import { FlowChartController } from './flow_chart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Flow_ChartSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Flow_Chart', schema: Flow_ChartSchema },
    ]),
  ],
  controllers: [FlowChartController],
  providers: [FlowChartService],
})
export class FlowChartModule {}
