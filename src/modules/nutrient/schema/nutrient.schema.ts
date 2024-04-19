import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type NutrientsDocument = Nutrients & Document;

@Schema()
export class Nutrients {
  @Prop()
  id_P: String;

  @Prop()
  nutrients: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const NutrientsSchema = SchemaFactory.createForClass(Nutrients);
