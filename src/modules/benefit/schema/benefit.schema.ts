import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type BenefitsDocument = Benefits & Document;

@Schema()
export class Benefits {
  @Prop()
  id_P: String;

  @Prop()
  benefits: String[];

  @Prop()
  amounts: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const BenefitsSchema = SchemaFactory.createForClass(Benefits);
