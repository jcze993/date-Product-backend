import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ClassificationDocument = Classification & Document;

@Schema()
export class Classification {
  @Prop()
  id_P: String;

  @Prop()
  factors: String[];

  @Prop()
  scores: String[];

  @Prop()
  classifications: String[];

  @Prop()
  others: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const ClassificationSchema =
  SchemaFactory.createForClass(Classification);
