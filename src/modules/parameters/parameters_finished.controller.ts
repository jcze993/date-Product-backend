import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ParametersFinishedService } from './parameters_finished.service';
import { CreateParametersDto } from './dto';

@Controller('ParametersFormGroup')
export class ParametersFinishedController {
  constructor(
    private readonly parametersFinishedService: ParametersFinishedService,
  ) {}

  @Post()
  async createParametersFinished(
    @Res() res,
    @Body() createParametersDto: CreateParametersDto,
  ) {
    try {
      const newParametersFinished =
        await this.parametersFinishedService.createParametersFinished(
          createParametersDto,
        );
      return res.status(HttpStatus.CREATED).json(newParametersFinished);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllParametersFinished(@Res() res) {
    try {
      const allParametersFinished =
        await this.parametersFinishedService.findAllParametersFinished();
      return res.status(HttpStatus.OK).json(allParametersFinished);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneParameterFinished(@Res() res, @Param('id') id: string) {
    try {
      const oneParameterFinished =
        await this.parametersFinishedService.findOneParameterFinished(id);
      if (!oneParameterFinished) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Parameter Finished not found' });
      }
      return res.status(HttpStatus.OK).json(oneParameterFinished);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateParameterFinished(
    @Res() res,
    @Param('id') id: string,
    @Body() updateParametersFinishedDto: CreateParametersDto,
  ) {
    try {
      const updatedParameterFinished =
        await this.parametersFinishedService.updateParameterFinished(
          id,
          updateParametersFinishedDto,
        );
      if (!updatedParameterFinished) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Parameter Finished not found' });
      }
      return res.status(HttpStatus.OK).json(updatedParameterFinished);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeParameterFinished(@Res() res, @Param('id') id: string) {
    try {
      const removedParameterFinished =
        await this.parametersFinishedService.removeParameterFinished(id);
      if (!removedParameterFinished) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Parameter Finished not found' });
      }
      return res.status(HttpStatus.OK).json(removedParameterFinished);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
