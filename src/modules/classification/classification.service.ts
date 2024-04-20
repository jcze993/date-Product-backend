import { Injectable } from '@nestjs/common';
import { CreateClassificationDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Model } from 'mongoose';
import { Classification } from './schema';

@Injectable()
export class ClassificationService {
  constructor(
    @InjectModel('Classification')
    private readonly classificationModel: Model<Classification>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}
  async createClassification(
    createClassificationDto: CreateClassificationDto,
  ): Promise<Classification> {
    return new this.classificationModel(createClassificationDto).save();
  }

  async findAllClassification(): Promise<Classification[]> {
    return await this.classificationModel.find();
  }

  async findOneClassification(id: string): Promise<Classification> {
    return await this.classificationModel.findById(id);
  }

  async updateClassification(
    id: string,
    updateClassificationDto: CreateClassificationDto,
  ): Promise<Classification> {
    return await this.classificationModel.findByIdAndUpdate(
      id,
      updateClassificationDto,
      {
        new: true,
      },
    );
  }

  async removeClassification(id: string): Promise<Classification> {
    return await this.classificationModel.findByIdAndDelete(id);
  }
}
