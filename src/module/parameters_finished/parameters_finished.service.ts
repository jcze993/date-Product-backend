import { Injectable } from '@nestjs/common';
import { CreateParametersFinishedDto } from './dto/create-parameters_finished.dto';
import { UpdateParametersFinishedDto } from './dto/update-parameters_finished.dto';

@Injectable()
export class ParametersFinishedService {
  create(createParametersFinishedDto: CreateParametersFinishedDto) {
    return 'This action adds a new parametersFinished';
  }

  findAll() {
    return `This action returns all parametersFinished`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametersFinished`;
  }

  update(id: number, updateParametersFinishedDto: UpdateParametersFinishedDto) {
    return `This action updates a #${id} parametersFinished`;
  }

  remove(id: number) {
    return `This action removes a #${id} parametersFinished`;
  }
}
