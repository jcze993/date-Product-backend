import { Module } from '@nestjs/common';
import { databaseProviders } from './data_base.providers';

@Module({
  providers: [databaseProviders],
  exports: [databaseProviders],
})
export class DataBaseModule {}
