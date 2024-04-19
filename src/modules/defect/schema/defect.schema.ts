import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type DefectsDocument = Defects & Document;

@Schema()
export class Defects {
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
export const DefectsSchema = SchemaFactory.createForClass(Defects);
