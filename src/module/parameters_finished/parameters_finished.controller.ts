import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametersFinishedService } from './parameters_finished.service';
import { CreateParametersFinishedDto } from './dto/create-parameters_finished.dto';
import { UpdateParametersFinishedDto } from './dto/update-parameters_finished.dto';

@Controller('parameters-finished')
export class ParametersFinishedController {
  constructor(private readonly parametersFinishedService: ParametersFinishedService) {}

  @Post()
  create(@Body() createParametersFinishedDto: CreateParametersFinishedDto) {
    return this.parametersFinishedService.create(createParametersFinishedDto);
  }

  @Get()
  findAll() {
    return this.parametersFinishedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametersFinishedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParametersFinishedDto: UpdateParametersFinishedDto) {
    return this.parametersFinishedService.update(+id, updateParametersFinishedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametersFinishedService.remove(+id);
  }
}
