import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlowChartService } from './flow_chart.service';
import { CreateFlowChartDto } from './dto/create-flow_chart.dto';
import { UpdateFlowChartDto } from './dto/update-flow_chart.dto';

@Controller('flow-chart')
export class FlowChartController {
  constructor(private readonly flowChartService: FlowChartService) {}

  @Post()
  create(@Body() createFlowChartDto: CreateFlowChartDto) {
    return this.flowChartService.create(createFlowChartDto);
  }

  @Get()
  findAll() {
    return this.flowChartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowChartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlowChartDto: UpdateFlowChartDto) {
    return this.flowChartService.update(+id, updateFlowChartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowChartService.remove(+id);
  }
}
