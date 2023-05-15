import { Test, TestingModule } from '@nestjs/testing';
import { BoyController } from './boy.controller';
import { BoyService } from './boy.service';

describe('BoyController', () => {
  let controller: BoyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoyController],
      providers: [BoyService],
    }).compile();

    controller = module.get<BoyController>(BoyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
