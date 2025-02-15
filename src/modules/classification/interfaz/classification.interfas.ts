import { Document } from 'mongoose';
export interface Classification extends Document {
  readonly id_P: string;
  readonly factors: string[];
  readonly scores: string[];
  readonly classifications: string[];
  readonly others: string[];
  readonly createdAt: Date;
}
