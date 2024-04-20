import { Injectable } from '@nestjs/common';
import { CreateNutrientDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Nutrient } from './schema';

@Injectable()
export class NutrientService {
  constructor(
    @InjectModel('Nutrient')
    private readonly nutrientModel: Model<Nutrient>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createNutrient(
    createNutrientDto: CreateNutrientDto,
  ): Promise<Nutrient> {
    return await this.nutrientModel.create(createNutrientDto);
  }

  async findAllNutrients(): Promise<Nutrient[]> {
    return await this.nutrientModel.find();
  }

  async findOneNutrient(id: string): Promise<Nutrient> {
    return await this.nutrientModel.findById(id);
  }

  async updateNutrient(
    id: string,
    updateNutrientDto: CreateNutrientDto,
  ): Promise<Nutrient> {
    return await this.nutrientModel.findByIdAndUpdate(id, updateNutrientDto, {
      new: true,
    });
  }

  async removeNutrient(id: string): Promise<Nutrient> {
    return await this.nutrientModel.findByIdAndDelete(id);
  }
}
