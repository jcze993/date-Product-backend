export class CreateProductDto {
  readonly id_P: string;
  readonly title: string;
  readonly variant: string;
  readonly category: string;
  readonly definition: string;
  readonly bibliography: string[];
  readonly createdAt: Date;
}
