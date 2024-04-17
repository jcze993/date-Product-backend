import { PartialType } from '@nestjs/mapped-types';
import { CreateParametersFinishedDto } from './create-parameters_finished.dto';

export class UpdateParametersFinishedDto extends PartialType(CreateParametersFinishedDto) {}
