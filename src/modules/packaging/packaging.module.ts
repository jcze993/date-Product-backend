import { Module } from '@nestjs/common';
import { PackagingService } from './packaging.service';
import { PackagingController } from './packaging.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PackagingSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Packaging', schema: PackagingSchema }]),
  ],
  controllers: [PackagingController],
  providers: [PackagingService],
})
export class PackagingModule {}
