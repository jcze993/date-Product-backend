import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id_P: String;

  @Prop()
  title: String;

  @Prop()
  variant: String;

  @Prop()
  category: String;

  @Prop()
  definition: String;

  @Prop()
  bibliography: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
