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
import { NutrientService } from './nutrient.service';
import { CreateNutrientDto } from './dto';

@Controller('nutrient')
export class NutrientController {
  constructor(private readonly nutrientService: NutrientService) {}

  @Post()
  async createNutrient(
    @Res() res,
    @Body() createNutrientDto: CreateNutrientDto,
  ) {
    try {
      const newNutrient =
        await this.nutrientService.createNutrient(createNutrientDto);
      return res.status(HttpStatus.CREATED).json(newNutrient);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllNutrients(@Res() res) {
    try {
      const allNutrients = await this.nutrientService.findAllNutrients();
      return res.status(HttpStatus.OK).json(allNutrients);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneNutrient(@Res() res, @Param('id') id: string) {
    try {
      const oneNutrient = await this.nutrientService.findOneNutrient(id);
      if (!oneNutrient) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nutrient not found' });
      }
      return res.status(HttpStatus.OK).json(oneNutrient);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateNutrient(
    @Res() res,
    @Param('id') id: string,
    @Body() updateNutrientDto: CreateNutrientDto,
  ) {
    try {
      const updatedNutrient = await this.nutrientService.updateNutrient(
        id,
        updateNutrientDto,
      );
      if (!updatedNutrient) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nutrient not found' });
      }
      return res.status(HttpStatus.OK).json(updatedNutrient);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeNutrient(@Res() res, @Param('id') id: string) {
    try {
      const removedNutrient = await this.nutrientService.removeNutrient(id);
      if (!removedNutrient) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nutrient not found' });
      }
      return res.status(HttpStatus.OK).json(removedNutrient);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
