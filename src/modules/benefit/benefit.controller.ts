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
import { BenefitService } from './benefit.service';
import { CreateBenefitDto } from './dto';

@Controller('benefit')
export class BenefitController {
  constructor(private readonly benefitService: BenefitService) {}

  @Post()
  async createBenefit(@Res() res, @Body() createBenefitDto: CreateBenefitDto) {
    try {
      const newBenefit =
        await this.benefitService.createBenefit(createBenefitDto);
      return res.status(HttpStatus.CREATED).json(newBenefit);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllBenefit(@Res() res) {
    try {
      const allBenefit = await this.benefitService.findAllBenefit();
      return res.status(HttpStatus.OK).json(allBenefit);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneBenefit(@Res() res, @Param('id') id: string) {
    try {
      const OneBenefit = await this.benefitService.findOneBenefit(id);
      if (!OneBenefit) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Benefit not found' });
      }
      return res.status(HttpStatus.OK).json(OneBenefit);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateBenefit(
    @Res() res,
    @Param('id') id: string,
    @Body() updateBenefitDto: CreateBenefitDto,
  ) {
    try {
      const UpdateBenefit = await this.benefitService.updateBenefit(
        id,
        updateBenefitDto,
      );
      if (!UpdateBenefit) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Benefit not found' });
      }
      return res.status(HttpStatus.OK).json(UpdateBenefit);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeBenefit(@Res() res, @Param('id') id: string) {
    try {
      const RemoveBenefit = await this.benefitService.removeBenefit(id);
      if (!RemoveBenefit) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Benefit not found' });
      }
      return res.status(HttpStatus.OK).json(RemoveBenefit);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
