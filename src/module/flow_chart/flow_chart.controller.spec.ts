import { Test, TestingModule } from '@nestjs/testing';
import { FlowChartController } from './flow_chart.controller';
import { FlowChartService } from './flow_chart.service';

describe('FlowChartController', () => {
  let controller: FlowChartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowChartController],
      providers: [FlowChartService],
    }).compile();

    controller = module.get<FlowChartController>(FlowChartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
