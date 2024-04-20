import { Injectable } from '@nestjs/common';
import { CreateBenefitDto } from './dto';
import { LazyModuleLoader } from '@nestjs/core';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Benefit } from './schema';

@Injectable()
export class BenefitService {
  constructor(
    @InjectModel('Benefit') private readonly benefitModel: Model<Benefit>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}
  async createBenefit(createBenefitDto: CreateBenefitDto): Promise<Benefit> {
    return new this.benefitModel(createBenefitDto).save();
  }

  async findAllBenefit(): Promise<Benefit[]> {
    return await this.benefitModel.find();
  }

  async findOneBenefit(id: string): Promise<Benefit> {
    return await this.benefitModel.findById(id);
  }

  async updateBenefit(
    id: string,
    updateBenefitDto: CreateBenefitDto,
  ): Promise<Benefit> {
    return await this.benefitModel.findByIdAndUpdate(id, updateBenefitDto, {
      new: true,
    });
  }

  async removeBenefit(id: string): Promise<Benefit> {
    return await this.benefitModel.findByIdAndDelete(id);
  }
}
