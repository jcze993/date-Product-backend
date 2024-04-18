import { Injectable } from '@nestjs/common';
import { CreateSensoryDto } from './dto/create-sensory.dto';

@Injectable()
export class SensoryService {
  create(createSensoryDto: CreateSensoryDto) {
    return 'This action adds a new sensory';
  }

  findAll() {
    return `This action returns all sensory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensory`;
  }

  update(id: number, updateSensoryDto: CreateSensoryDto) {
    return `This action updates a #${id} sensory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensory`;
  }
}
