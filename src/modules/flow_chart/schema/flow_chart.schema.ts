import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type Flow_ChartDocument = Flow_Chart & Document;

@Schema()
export class Flow_Chart {
  @Prop()
  id_P: String;

  @Prop()
  operations: String[];

  @Prop()
  parameters_controls: String[];

  @Prop()
  ranges_controls: String[];

  @Prop()
  inputs: String[];

  @Prop()
  outputs: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const Flow_ChartSchema = SchemaFactory.createForClass(Flow_Chart);
