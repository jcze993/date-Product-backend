import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type CompositionDocument = Composition & Document;

@Schema()
export class Composition {
  @Prop()
  id_P: String;

  @Prop()
  components: String[];

  @Prop()
  ranges: String[];

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}
export const CompositionSchema = SchemaFactory.createForClass(Composition);
