import { BenefitModule } from '@modules/benefit';
import { ClassificationModule } from '@modules/classification';
import { CompositionModule } from '@modules/composition';
import { DefectModule } from '@modules/defect';
import { FlowChartModule } from '@modules/flow_chart';
import { FormulaModule } from '@modules/formula';
import { PackagingModule } from '@modules/packaging';
import { ParametersFinishedModule } from '@modules/parameters';
import { ProductModule } from '@modules/product';
import { SensoryModule } from '@modules/sensory';
import { StoreModule } from '@modules/store';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.db),
    ProductModule,
    BenefitModule,
    CompositionModule,
    DefectModule,
    ClassificationModule,
    FlowChartModule,
    FormulaModule,
    PackagingModule,
    ParametersFinishedModule,
    SensoryModule,
    StoreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
