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
import { DefectService } from './defect.service';
import { CreateDefectDto } from './dto';

@Controller('defect')
export class DefectController {
  constructor(private readonly defectService: DefectService) {}

  @Post()
  async createDefect(@Res() res, @Body() createDefectDto: CreateDefectDto) {
    try {
      const newDefect = await this.defectService.createDefect(createDefectDto);
      return res.status(HttpStatus.CREATED).json(newDefect);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllDefects(@Res() res) {
    try {
      const allDefects = await this.defectService.findAllDefects();
      return res.status(HttpStatus.OK).json(allDefects);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneDefect(@Res() res, @Param('id') id: string) {
    try {
      const oneDefect = await this.defectService.findOneDefect(id);
      if (!oneDefect) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Defect not found' });
      }
      return res.status(HttpStatus.OK).json(oneDefect);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateDefect(
    @Res() res,
    @Param('id') id: string,
    @Body() updateDefectDto: CreateDefectDto,
  ) {
    try {
      const updatedDefect = await this.defectService.updateDefect(
        id,
        updateDefectDto,
      );
      if (!updatedDefect) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Defect not found' });
      }
      return res.status(HttpStatus.OK).json(updatedDefect);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeDefect(@Res() res, @Param('id') id: string) {
    try {
      const removedDefect = await this.defectService.removeDefect(id);
      if (!removedDefect) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Defect not found' });
      }
      return res.status(HttpStatus.OK).json(removedDefect);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
