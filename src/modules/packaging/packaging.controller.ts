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
import { PackagingService } from './packaging.service';
import { CreatePackagingDto } from './dto';

@Controller('packaging')
export class PackagingController {
  constructor(private readonly packagingService: PackagingService) {}

  @Post()
  async createPackaging(
    @Res() res,
    @Body() createPackagingDto: CreatePackagingDto,
  ) {
    try {
      const newPackaging =
        await this.packagingService.createPackaging(createPackagingDto);
      return res.status(HttpStatus.CREATED).json(newPackaging);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllPackagings(@Res() res) {
    try {
      const allPackagings = await this.packagingService.findAllPackagings();
      return res.status(HttpStatus.OK).json(allPackagings);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOnePackaging(@Res() res, @Param('id') id: string) {
    try {
      const onePackaging = await this.packagingService.findOnePackaging(id);
      if (!onePackaging) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Packaging not found' });
      }
      return res.status(HttpStatus.OK).json(onePackaging);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updatePackaging(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePackagingDto: CreatePackagingDto,
  ) {
    try {
      const updatedPackaging = await this.packagingService.updatePackaging(
        id,
        updatePackagingDto,
      );
      if (!updatedPackaging) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Packaging not found' });
      }
      return res.status(HttpStatus.OK).json(updatedPackaging);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removePackaging(@Res() res, @Param('id') id: string) {
    try {
      const removedPackaging = await this.packagingService.removePackaging(id);
      if (!removedPackaging) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Packaging not found' });
      }
      return res.status(HttpStatus.OK).json(removedPackaging);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
