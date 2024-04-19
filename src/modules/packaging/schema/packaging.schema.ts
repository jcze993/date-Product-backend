import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type PackagingDocument = Packaging & Document;

@Schema()
export class Packaging {
  @Prop()
  id_P: String;

  @Prop()
  descriptions: String[];

  @Prop()
  functions: String[];

  @Prop()
  orders: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const PackagingSchema = SchemaFactory.createForClass(Packaging);
