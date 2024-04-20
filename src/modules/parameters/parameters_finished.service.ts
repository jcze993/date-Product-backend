import { Injectable } from '@nestjs/common';
import { CreateParametersDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Parameter } from './schema';

@Injectable()
export class ParametersFinishedService {
  constructor(
    @InjectModel('Parameter')
    private readonly parameterModel: Model<Parameter>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createParametersFinished(
    createParametersFinishedDto: CreateParametersDto,
  ): Promise<Parameter> {
    return await this.parameterModel.create(createParametersFinishedDto);
  }

  async findAllParametersFinished(): Promise<Parameter[]> {
    return await this.parameterModel.find();
  }

  async findOneParameterFinished(id: string): Promise<Parameter> {
    return await this.parameterModel.findById(id);
  }

  async updateParameterFinished(
    id: string,
    updateParametersFinishedDto: CreateParametersDto,
  ): Promise<Parameter> {
    return await this.parameterModel.findByIdAndUpdate(
      id,
      updateParametersFinishedDto,
      { new: true },
    );
  }

  async removeParameterFinished(id: string): Promise<Parameter> {
    return await this.parameterModel.findByIdAndDelete(id);
  }
}
