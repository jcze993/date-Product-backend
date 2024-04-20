import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto';
import { LazyModuleLoader } from '@nestjs/core';
import { Product } from './schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}
  async createProduc(createProductDto: CreateProductDto): Promise<Product> {
    return await new this.productModel(createProductDto).save();
  }

  async findAllProduct(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOneProduct(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }

  async updateProduct(
    id: string,
    updateProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }

  async removeProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
