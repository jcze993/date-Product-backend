import { Injectable } from '@nestjs/common';
import { CreateFormulaDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Formula } from './schema';

@Injectable()
export class FormulaService {
  constructor(
    @InjectModel('Formula')
    private readonly formulaModel: Model<Formula>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createFormula(createFormulaDto: CreateFormulaDto): Promise<Formula> {
    return await this.formulaModel.create(createFormulaDto);
  }

  async findAllFormulas(): Promise<Formula[]> {
    return await this.formulaModel.find();
  }

  async findOneFormula(id: string): Promise<Formula> {
    return await this.formulaModel.findById(id);
  }

  async updateFormula(
    id: string,
    updateFormulaDto: CreateFormulaDto,
  ): Promise<Formula> {
    return await this.formulaModel.findByIdAndUpdate(id, updateFormulaDto, {
      new: true,
    });
  }

  async removeFormula(id: string): Promise<Formula> {
    return await this.formulaModel.findByIdAndDelete(id);
  }
}
