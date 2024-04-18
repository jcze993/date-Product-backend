import { Test, TestingModule } from '@nestjs/testing';
import { ParametersFinishedController } from './parameters_finished.controller';
import { ParametersFinishedService } from './parameters_finished.service';

describe('ParametersFinishedController', () => {
  let controller: ParametersFinishedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametersFinishedController],
      providers: [ParametersFinishedService],
    }).compile();

    controller = module.get<ParametersFinishedController>(ParametersFinishedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
