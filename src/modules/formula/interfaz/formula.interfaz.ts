import { Document } from 'mongoose';
export interface Formula extends Document {
  readonly id_P: string;
  readonly names: string[];
  readonly formulas: string[];
  readonly createdAt: Date;
}
