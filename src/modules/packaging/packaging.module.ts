import { Module } from '@nestjs/common';
import { PackagingService } from './packaging.service';
import { PackagingController } from './packaging.controller';

@Module({
  controllers: [PackagingController],
  providers: [PackagingService],
})
export class PackagingModule {}
