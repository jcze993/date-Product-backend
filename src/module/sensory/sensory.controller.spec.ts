import { Test, TestingModule } from '@nestjs/testing';
import { SensoryController } from './sensory.controller';
import { SensoryService } from './sensory.service';

describe('SensoryController', () => {
  let controller: SensoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensoryController],
      providers: [SensoryService],
    }).compile();

    controller = module.get<SensoryController>(SensoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
