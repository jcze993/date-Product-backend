import { Module } from '@nestjs/common';
import { DefectService } from './defect.service';
import { DefectController } from './defect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DefectSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Defect', schema: DefectSchema }]),
  ],
  controllers: [DefectController],
  providers: [DefectService],
})
export class DefectModule {}
