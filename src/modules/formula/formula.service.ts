import { Injectable } from '@nestjs/common';
import { CreateFormulaDto } from './dto/create-formula.dto';

@Injectable()
export class FormulaService {
  create(createFormulaDto: CreateFormulaDto) {
    return 'This action adds a new formula';
  }

  findAll() {
    return `This action returns all formula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formula`;
  }

  update(id: number, updateFormulaDto: CreateFormulaDto) {
    return `This action updates a #${id} formula`;
  }

  remove(id: number) {
    return `This action removes a #${id} formula`;
  }
}
