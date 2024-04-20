import { Injectable } from '@nestjs/common';
import { CreateDefectDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Defect } from './schema';

@Injectable()
export class DefectService {
  constructor(
    @InjectModel('Defect')
    private readonly defectModel: Model<Defect>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createDefect(createDefectDto: CreateDefectDto): Promise<Defect> {
    return await this.defectModel.create(createDefectDto);
  }

  async findAllDefects(): Promise<Defect[]> {
    return await this.defectModel.find();
  }

  async findOneDefect(id: string): Promise<Defect> {
    return await this.defectModel.findById(id);
  }

  async updateDefect(
    id: string,
    updateDefectDto: CreateDefectDto,
  ): Promise<Defect> {
    return await this.defectModel.findByIdAndUpdate(id, updateDefectDto, {
      new: true,
    });
  }

  async removeDefect(id: string): Promise<Defect> {
    return await this.defectModel.findByIdAndDelete(id);
  }
}
