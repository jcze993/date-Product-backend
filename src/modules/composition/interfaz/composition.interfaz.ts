import { Document } from 'mongoose';
export interface Composition extends Document {
  readonly id_P: string;
  readonly components: string[];
  readonly ranges: string[];
  readonly createdAt: Date;
}
