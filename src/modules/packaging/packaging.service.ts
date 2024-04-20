import { Injectable } from '@nestjs/common';
import { CreatePackagingDto } from './dto';
import { Packaging } from './schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class PackagingService {
  constructor(
    @InjectModel('Packaging')
    private readonly packagingModel: Model<Packaging>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  async createPackaging(
    createPackagingDto: CreatePackagingDto,
  ): Promise<Packaging> {
    return await this.packagingModel.create(createPackagingDto);
  }

  async findAllPackagings(): Promise<Packaging[]> {
    return await this.packagingModel.find();
  }

  async findOnePackaging(id: string): Promise<Packaging> {
    return await this.packagingModel.findById(id);
  }

  async updatePackaging(
    id: string,
    updatePackagingDto: CreatePackagingDto,
  ): Promise<Packaging> {
    return await this.packagingModel.findByIdAndUpdate(id, updatePackagingDto, {
      new: true,
    });
  }

  async removePackaging(id: string): Promise<Packaging> {
    return await this.packagingModel.findByIdAndDelete(id);
  }
}
