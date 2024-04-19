import { Document } from 'mongoose';
export interface Sensory extends Document {
  readonly id_P: string;
  readonly characteristics: string[];
  readonly ranges: string[];
  readonly createdAt: Date;
}
