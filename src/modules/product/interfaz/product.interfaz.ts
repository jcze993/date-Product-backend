import { Document } from 'mongoose';
export interface Product extends Document {
  readonly id_P: string;
  readonly title: string;
  readonly variant: number;
  readonly category: string;
  readonly definition: string;
  readonly bibliography: string[];
  readonly createdAt: Date;
}
