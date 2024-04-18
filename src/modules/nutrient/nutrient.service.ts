import { Injectable } from '@nestjs/common';
import { CreateNutrientDto } from './dto/create-nutrient.dto';

@Injectable()
export class NutrientService {
  create(createNutrientDto: CreateNutrientDto) {
    return 'This action adds a new nutrient';
  }

  findAll() {
    return `This action returns all nutrient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutrient`;
  }

  update(id: number, updateNutrientDto: CreateNutrientDto) {
    return `This action updates a #${id} nutrient`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutrient`;
  }
}
