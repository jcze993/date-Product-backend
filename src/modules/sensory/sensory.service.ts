import { Injectable } from '@nestjs/common';
import { CreateSensoryDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Sensory } from './schema';

@Injectable()
export class SensoryService {
  constructor(
    @InjectModel('Sensory')
    private readonly sensoryModel: Model<Sensory>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createSensory(createSensoryDto: CreateSensoryDto): Promise<Sensory> {
    return await new this.sensoryModel(createSensoryDto).save();
  }

  async findAllSensory(): Promise<Sensory[]> {
    return await this.sensoryModel.find();
  }

  async findOneSensory(id: string): Promise<Sensory> {
    return await this.sensoryModel.findById(id);
  }

  async updateSensory(
    id: string,
    updateSensoryDto: CreateSensoryDto,
  ): Promise<Sensory> {
    return await this.sensoryModel.findByIdAndUpdate(id, updateSensoryDto, {
      new: true,
    });
  }

  async removeSensory(id: string): Promise<Sensory> {
    return await this.sensoryModel.findByIdAndDelete(id);
  }
}
