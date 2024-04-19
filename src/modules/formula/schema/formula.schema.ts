import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type FormulasDocument = Formulas & Document;

@Schema()
export class Formulas {
  @Prop()
  id_P: String;

  @Prop()
  name: String[];

  @Prop()
  formulas: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const FormulasSchema = SchemaFactory.createForClass(Formulas);
