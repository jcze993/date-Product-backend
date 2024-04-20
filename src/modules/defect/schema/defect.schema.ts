import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type DefectDocument = Defect & Document;

@Schema()
export class Defect {
  @Prop()
  id_P: String;

  @Prop()
  defects: String[];

  @Prop()
  causes: String[];

  @Prop()
  solutions: String[];

  @Prop()
  preventions: String[];

  @Prop()
  moments: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const DefectSchema = SchemaFactory.createForClass(Defect);
