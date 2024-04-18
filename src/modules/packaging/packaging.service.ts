import { Injectable } from '@nestjs/common';
import { CreatePackagingDto } from './dto/create-packaging.dto';

@Injectable()
export class PackagingService {
  create(createPackagingDto: CreatePackagingDto) {
    return 'This action adds a new packaging';
  }

  findAll() {
    return `This action returns all packaging`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packaging`;
  }

  update(id: number, updatePackagingDto: CreatePackagingDto) {
    return `This action updates a #${id} packaging`;
  }

  remove(id: number) {
    return `This action removes a #${id} packaging`;
  }
}
