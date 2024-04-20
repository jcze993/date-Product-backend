import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ParameterDocument = Parameter & Document;

@Schema()
export class Parameter {
  @Prop()
  id_P: String;

  @Prop()
  parameters: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const ParameterSchema = SchemaFactory.createForClass(Parameter);
