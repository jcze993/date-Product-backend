import { Injectable } from '@nestjs/common';
import { CreateFlowChartDto } from './dto/create-flow_chart.dto';
import { UpdateFlowChartDto } from './dto/update-flow_chart.dto';

@Injectable()
export class FlowChartService {
  create(createFlowChartDto: CreateFlowChartDto) {
    return 'This action adds a new flowChart';
  }

  findAll() {
    return `This action returns all flowChart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flowChart`;
  }

  update(id: number, updateFlowChartDto: UpdateFlowChartDto) {
    return `This action updates a #${id} flowChart`;
  }

  remove(id: number) {
    return `This action removes a #${id} flowChart`;
  }
}
