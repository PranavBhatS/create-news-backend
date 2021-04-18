import { Test, TestingModule } from '@nestjs/testing';
import { CricketParserService } from './cricket-parser.service';

describe('CricketParserService', () => {
  let service: CricketParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CricketParserService],
    }).compile();

    service = module.get<CricketParserService>(CricketParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
