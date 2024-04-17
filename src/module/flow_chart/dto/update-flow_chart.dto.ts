import { PartialType } from '@nestjs/mapped-types';
import { CreateFlowChartDto } from './create-flow_chart.dto';

export class UpdateFlowChartDto extends PartialType(CreateFlowChartDto) {}
