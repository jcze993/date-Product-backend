import { Document } from 'mongoose';
export interface Packaging extends Document {
  readonly id_P: string;
  readonly descriptions: string[];
  readonly functions: string[];
  readonly orders: string[];
  readonly createdAt: Date;
}
