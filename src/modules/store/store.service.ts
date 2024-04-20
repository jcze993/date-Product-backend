import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto';
import { Model } from 'mongoose';
import { Stores } from './schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel('Store')
    private readonly storeModel: Model<Stores>,
  ) {}

  async createStore(createStoreDto: CreateStoreDto): Promise<Stores> {
    return await new this.storeModel(createStoreDto).save();
  }

  async findAllStores(): Promise<Stores[]> {
    return await this.storeModel.find();
  }

  async findOneStore(id: string): Promise<Stores> {
    return await this.storeModel.findById(id);
  }

  async updateStore(
    id: string,
    updateStoreDto: CreateStoreDto,
  ): Promise<Stores> {
    return await this.storeModel.findByIdAndUpdate(id, updateStoreDto, {
      new: true,
    });
  }

  async removeStore(id: string): Promise<Stores> {
    return await this.storeModel.findByIdAndDelete(id);
  }
}
