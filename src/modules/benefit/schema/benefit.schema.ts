import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type BenefitDocument = Benefit & Document;

@Schema()
export class Benefit {
  @Prop()
  id_P: String;

  @Prop()
  benefits: String[];

  @Prop()
  amounts: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const BenefitSchema = SchemaFactory.createForClass(Benefit);
