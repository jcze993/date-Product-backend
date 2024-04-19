export class CreateCompositionDto {
  readonly id_P: string;
  readonly components: string[];
  readonly ranges: string[];
  readonly createdAt: Date;
}
