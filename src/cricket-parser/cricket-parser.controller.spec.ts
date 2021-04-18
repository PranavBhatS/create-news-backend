import { Test, TestingModule } from '@nestjs/testing';
import { CricketParserController } from './cricket-parser.controller';

describe('CricketParserController', () => {
  let controller: CricketParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CricketParserController],
    }).compile();

    controller = module.get<CricketParserController>(CricketParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
