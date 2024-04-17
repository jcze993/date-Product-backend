import { PartialType } from '@nestjs/mapped-types';
import { CreateSensoryDto } from './create-sensory.dto';

export class UpdateSensoryDto extends PartialType(CreateSensoryDto) {}
