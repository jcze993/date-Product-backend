import { databaseProviders } from '@core/data_base/data_base.providers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [databaseProviders],
})
export class AppModule {}
