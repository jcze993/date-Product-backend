import { Document } from 'mongoose';
export interface Flow_Chart extends Document {
  readonly id_P: string;
  readonly operations: string[];
  readonly parameters_controls: string[];
  readonly ranges_controls: string[];
  readonly inputs: string[];
  readonly outputs: string[];
  readonly createdAt: Date;
}
