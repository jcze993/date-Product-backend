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
import { CompositionService } from './composition.service';
import { CreateCompositionDto } from './dto';

@Controller('CompositionFormGroup')
export class CompositionController {
  constructor(private readonly compositionService: CompositionService) {}

  @Post()
  async createComposition(
    @Res() res,
    @Body() createCompositionDto: CreateCompositionDto,
  ) {
    const newComposition =
      await this.compositionService.createComposition(createCompositionDto);
    return res.status(HttpStatus.CREATED).json(newComposition);
  }

  @Get()
  async findAllCompositions(@Res() res) {
    const allCompositions = await this.compositionService.findAllCompositions();
    return res.status(HttpStatus.OK).json(allCompositions);
  }

  @Get(':id')
  async findOneComposition(@Res() res, @Param('id') id: string) {
    const composition = await this.compositionService.findOneComposition(id);
    if (!composition) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Composition not found' });
    }
    return res.status(HttpStatus.OK).json(composition);
  }

  @Patch(':id')
  async updateComposition(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCompositionDto: CreateCompositionDto,
  ) {
    const updatedComposition = await this.compositionService.updateComposition(
      id,
      updateCompositionDto,
    );
    if (!updatedComposition) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Composition not found' });
    }
    return res.status(HttpStatus.OK).json(updatedComposition);
  }

  @Delete(':id')
  async removeComposition(@Res() res, @Param('id') id: string) {
    const removedComposition =
      await this.compositionService.removeComposition(id);
    if (!removedComposition) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Composition not found' });
    }
    return res.status(HttpStatus.OK).json(removedComposition);
  }
}
