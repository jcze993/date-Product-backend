import { Injectable } from '@nestjs/common';
import { CreateFlowChartDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Flow_Chart } from './schema';

@Injectable()
export class FlowChartService {
  constructor(
    @InjectModel('Flow_Chart')
    private readonly flowChartModel: Model<Flow_Chart>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createFlowChart(
    createFlowChartDto: CreateFlowChartDto,
  ): Promise<Flow_Chart> {
    return await this.flowChartModel.create(createFlowChartDto);
  }

  async findAllFlowCharts(): Promise<Flow_Chart[]> {
    return await this.flowChartModel.find();
  }

  async findOneFlowChart(id: string): Promise<Flow_Chart> {
    return await this.flowChartModel.findById(id);
  }

  async updateFlowChart(
    id: string,
    updateFlowChartDto: CreateFlowChartDto,
  ): Promise<Flow_Chart> {
    return await this.flowChartModel.findByIdAndUpdate(id, updateFlowChartDto, {
      new: true,
    });
  }

  async removeFlowChart(id: string): Promise<Flow_Chart> {
    return await this.flowChartModel.findByIdAndDelete(id);
  }
}
