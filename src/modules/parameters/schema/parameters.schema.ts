import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ParametersDocument = Parameters & Document;

@Schema()
export class Parameters {
  @Prop()
  id_P: String;

  @Prop()
  parameters: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const ParametersSchema = SchemaFactory.createForClass(Parameters);
