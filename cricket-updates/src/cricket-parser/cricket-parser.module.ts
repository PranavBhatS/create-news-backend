import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { CricketParserController } from './cricket-parser.controller';
import { CricketParserService } from './cricket-parser.service';
import { CricketEntity } from './entity/cricket.entity';

@Module({
  controllers: [CricketParserController],
  providers: [CricketParserService, AppService],
  imports: [
    TypeOrmModule.forFeature([CricketEntity]),
  ],
})
export class CricketParserModule { }
