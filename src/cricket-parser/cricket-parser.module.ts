import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { CricketParserController } from './cricket-parser.controller';
import { CricketParserService } from './cricket-parser.service';
import { MatchEntity } from './entity/match.entity';

@Module({
  controllers: [CricketParserController],
  providers: [CricketParserService, AppService],
  imports: [
    TypeOrmModule.forFeature([MatchEntity]),
  ],
})
export class CricketParserModule { }
