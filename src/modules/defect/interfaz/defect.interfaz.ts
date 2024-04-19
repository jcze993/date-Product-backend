import { Document } from 'mongoose';
export interface Parameters extends Document {
  readonly id_P: string;
  readonly defects: string[];
  readonly causes: string[];
  readonly solutions: string[];
  readonly preventions: string[];
  readonly moments: string[];
  readonly createdAt: Date;
}
