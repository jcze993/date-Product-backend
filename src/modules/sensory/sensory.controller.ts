import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SensoryService } from './sensory.service';
import { CreateSensoryDto } from './dto/create-sensory.dto';

@Controller('sensory')
export class SensoryController {
  constructor(private readonly sensoryService: SensoryService) {}

  @Post()
  create(@Body() createSensoryDto: CreateSensoryDto) {
    return this.sensoryService.create(createSensoryDto);
  }

  @Get()
  findAll() {
    return this.sensoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensoryDto: CreateSensoryDto) {
    return this.sensoryService.update(+id, updateSensoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensoryService.remove(+id);
  }
}
