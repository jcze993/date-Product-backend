import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParametersFinishedService } from './parameters_finished.service';
import { CreateParametersDto } from './dto/create-parameters.dto';

@Controller('parameters-finished')
export class ParametersFinishedController {
  constructor(
    private readonly parametersFinishedService: ParametersFinishedService,
  ) {}

  @Post()
  create(@Body() createParametersDto: CreateParametersDto) {
    return this.parametersFinishedService.create(createParametersDto);
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
  update(
    @Param('id') id: string,
    @Body() updateParametersFinishedDto: CreateParametersDto,
  ) {
    return this.parametersFinishedService.update(
      +id,
      updateParametersFinishedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametersFinishedService.remove(+id);
  }
}
