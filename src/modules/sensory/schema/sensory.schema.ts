import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type SensoryDocument = Sensory & Document;

@Schema()
export class Sensory {
  @Prop()
  id_P: String;

  @Prop()
  characteristics: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const SensorySchema = SchemaFactory.createForClass(Sensory);
