import { Document } from 'mongoose';
export interface Store extends Document {
  readonly id_P: string;
  readonly parameters: string[];
  readonly ranges: string[];
  readonly createdAt: Date;
}
