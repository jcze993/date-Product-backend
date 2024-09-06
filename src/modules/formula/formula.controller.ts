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
import { FormulaService } from './formula.service';
import { CreateFormulaDto } from './dto';

@Controller('FormulaFormGroup')
export class FormulaController {
  constructor(private readonly formulaService: FormulaService) {}

  @Post()
  async createFormula(@Res() res, @Body() createFormulaDto: CreateFormulaDto) {
    try {
      const newFormula =
        await this.formulaService.createFormula(createFormulaDto);
      return res.status(HttpStatus.CREATED).json(newFormula);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllFormulas(@Res() res) {
    try {
      const allFormulas = await this.formulaService.findAllFormulas();
      return res.status(HttpStatus.OK).json(allFormulas);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneFormula(@Res() res, @Param('id') id: string) {
    try {
      const oneFormula = await this.formulaService.findOneFormula(id);
      if (!oneFormula) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Formula not found' });
      }
      return res.status(HttpStatus.OK).json(oneFormula);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateFormula(
    @Res() res,
    @Param('id') id: string,
    @Body() updateFormulaDto: CreateFormulaDto,
  ) {
    try {
      const updatedFormula = await this.formulaService.updateFormula(
        id,
        updateFormulaDto,
      );
      if (!updatedFormula) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Formula not found' });
      }
      return res.status(HttpStatus.OK).json(updatedFormula);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeFormula(@Res() res, @Param('id') id: string) {
    try {
      const removedFormula = await this.formulaService.removeFormula(id);
      if (!removedFormula) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Formula not found' });
      }
      return res.status(HttpStatus.OK).json(removedFormula);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
