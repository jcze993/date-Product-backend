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
import { SensoryService } from './sensory.service';
import { CreateSensoryDto } from './dto';

@Controller('SensoryFormGroup')
export class SensoryController {
  constructor(private readonly sensoryService: SensoryService) {}

  @Post()
  async createSensory(@Res() res, @Body() createSensoryDto: CreateSensoryDto) {
    try {
      const newSensory =
        await this.sensoryService.createSensory(createSensoryDto);
      return res.status(HttpStatus.CREATED).json(newSensory);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllSensory(@Res() res) {
    try {
      const allSensory = await this.sensoryService.findAllSensory();
      return res.status(HttpStatus.OK).json(allSensory);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneSensory(@Res() res, @Param('id') id: string) {
    try {
      const oneSensory = await this.sensoryService.findOneSensory(id);
      if (!oneSensory) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Sensory not found' });
      }
      return res.status(HttpStatus.OK).json(oneSensory);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateSensory(
    @Res() res,
    @Param('id') id: string,
    @Body() updateSensoryDto: CreateSensoryDto,
  ) {
    try {
      const updatedSensory = await this.sensoryService.updateSensory(
        id,
        updateSensoryDto,
      );
      if (!updatedSensory) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Sensory not found' });
      }
      return res.status(HttpStatus.OK).json(updatedSensory);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeSensory(@Res() res, @Param('id') id: string) {
    try {
      const removedSensory = await this.sensoryService.removeSensory(id);
      if (!removedSensory) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Sensory not found' });
      }
      return res.status(HttpStatus.OK).json(removedSensory);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
