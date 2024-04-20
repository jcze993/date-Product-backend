import { Injectable } from '@nestjs/common';
import { CreateCompositionDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';
import { Composition } from './schema';

@Injectable()
export class CompositionService {
  constructor(
    @InjectModel('Composition')
    private readonly compositionModel: Model<Composition>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createComposition(
    createCompositionDto: CreateCompositionDto,
  ): Promise<Composition> {
    return await this.compositionModel.create(createCompositionDto);
  }

  async findAllCompositions(): Promise<Composition[]> {
    return await this.compositionModel.find();
  }

  async findOneComposition(id: string): Promise<Composition> {
    return await this.compositionModel.findById(id);
  }

  async updateComposition(
    id: string,
    updateCompositionDto: CreateCompositionDto,
  ): Promise<Composition> {
    return await this.compositionModel.findByIdAndUpdate(
      id,
      updateCompositionDto,
      { new: true },
    );
  }

  async removeComposition(id: string): Promise<Composition> {
    return await this.compositionModel.findByIdAndDelete(id);
  }
}
