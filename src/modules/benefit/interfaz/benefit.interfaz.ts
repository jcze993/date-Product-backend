import { Document } from 'mongoose';
export interface Benefit extends Document {
  readonly id_P: string;
  readonly benefits: string[];
  readonly amounts: string[];
  readonly createdAt: Date;
}
