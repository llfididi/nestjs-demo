import { Test, TestingModule } from '@nestjs/testing';
import { BoyService } from './boy.service';

describe('BoyService', () => {
  let service: BoyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoyService],
    }).compile();

    service = module.get<BoyService>(BoyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
