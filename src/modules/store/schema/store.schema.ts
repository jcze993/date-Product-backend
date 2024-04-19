import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type StoreDocument = Stores & Document;

@Schema()
export class Stores {
  @Prop()
  id_P: String;

  @Prop()
  parameters: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const StoreSchema = SchemaFactory.createForClass(Stores);
