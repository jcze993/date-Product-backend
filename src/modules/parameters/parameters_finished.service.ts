import { Injectable } from '@nestjs/common';
import { CreateParametersDto } from './dto/create-parameters.dto';

@Injectable()
export class ParametersFinishedService {
  create(createParametersFinishedDto: CreateParametersDto) {
    return 'This action adds a new parametersFinished';
  }

  findAll() {
    return `This action returns all parametersFinished`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametersFinished`;
  }

  update(id: number, updateParametersFinishedDto: CreateParametersDto) {
    return `This action updates a #${id} parametersFinished`;
  }

  remove(id: number) {
    return `This action removes a #${id} parametersFinished`;
  }
}