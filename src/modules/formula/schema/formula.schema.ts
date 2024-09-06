import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type FormulaDocument = Formula & Document;

@Schema()
export class Formula {
  @Prop()
  id_P: String;

  @Prop()
  names: String[];

  @Prop()
  formulas: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const FormulaSchema = SchemaFactory.createForClass(Formula);
