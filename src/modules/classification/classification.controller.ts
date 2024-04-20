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
import { ClassificationService } from './classification.service';
import { CreateClassificationDto } from './dto';

@Controller('classification')
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @Post()
  async createClassification(
    @Res() res,
    @Body() createClassificationDto: CreateClassificationDto,
  ) {
    try {
      const newClassification =
        await this.classificationService.createClassification(
          createClassificationDto,
        );
      return res.status(HttpStatus.CREATED).json(newClassification);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllClassification(@Res() res) {
    try {
      const allClassification =
        await this.classificationService.findAllClassification();
      return res.status(HttpStatus.OK).json(allClassification);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneClassification(@Res() res, @Param('id') id: string) {
    try {
      const oneClassification =
        await this.classificationService.findOneClassification(id);
      if (!oneClassification) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Classification not found' });
      }
      return res.status(HttpStatus.OK).json(oneClassification);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateClassification(
    @Res() res,
    @Param('id') id: string,
    @Body() updateClassificationDto: CreateClassificationDto,
  ) {
    try {
      const updatedClassification =
        await this.classificationService.updateClassification(
          id,
          updateClassificationDto,
        );
      if (!updatedClassification) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Classification not found' });
      }
      return res.status(HttpStatus.OK).json(updatedClassification);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeClassification(@Res() res, @Param('id') id: string) {
    try {
      const removedClassification =
        await this.classificationService.removeClassification(id);
      if (!removedClassification) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Classification not found' });
      }
      return res.status(HttpStatus.OK).json(removedClassification);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
