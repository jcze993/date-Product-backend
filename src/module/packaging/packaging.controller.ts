import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackagingService } from './packaging.service';
import { CreatePackagingDto } from './dto/create-packaging.dto';
import { UpdatePackagingDto } from './dto/update-packaging.dto';

@Controller('packaging')
export class PackagingController {
  constructor(private readonly packagingService: PackagingService) {}

  @Post()
  create(@Body() createPackagingDto: CreatePackagingDto) {
    return this.packagingService.create(createPackagingDto);
  }

  @Get()
  findAll() {
    return this.packagingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packagingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackagingDto: UpdatePackagingDto) {
    return this.packagingService.update(+id, updatePackagingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packagingService.remove(+id);
  }
}
