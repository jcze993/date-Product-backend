import { Test, TestingModule } from '@nestjs/testing';
import { ParametersFinishedService } from './parameters_finished.service';

describe('ParametersFinishedService', () => {
  let service: ParametersFinishedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametersFinishedService],
    }).compile();

    service = module.get<ParametersFinishedService>(ParametersFinishedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
