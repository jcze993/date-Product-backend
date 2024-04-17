import { Test, TestingModule } from '@nestjs/testing';
import { SensoryService } from './sensory.service';

describe('SensoryService', () => {
  let service: SensoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensoryService],
    }).compile();

    service = module.get<SensoryService>(SensoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
