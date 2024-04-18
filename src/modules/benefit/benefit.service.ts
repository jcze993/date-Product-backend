import { Injectable } from '@nestjs/common';
import { CreateBenefitDto } from './dto/create-benefit.dto';

@Injectable()
export class BenefitService {
  create(createBenefitDto: CreateBenefitDto) {
    return 'This action adds a new benefit';
  }

  findAll() {
    return `This action returns all benefit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benefit`;
  }

  update(id: number, updateBenefitDto: CreateBenefitDto) {
    return `This action updates a #${id} benefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefit`;
  }
}
