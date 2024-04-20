import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type NutrientDocument = Nutrient & Document;

@Schema()
export class Nutrient {
  @Prop()
  id_P: String;

  @Prop()
  nutrients: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const NutrientSchema = SchemaFactory.createForClass(Nutrient);
