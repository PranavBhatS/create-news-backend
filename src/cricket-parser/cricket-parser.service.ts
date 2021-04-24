import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { AppService } from 'src/app.service';
import { Repository } from 'typeorm';
import { CricketDto } from './dto/match.dto';
import FilterParameters from './dto/matchFilter.dto';
import { MatchEntity } from './entity/match.entity';
@Injectable()
export class CricketParserService {

   constructor(
      @InjectRepository(MatchEntity)
      private matchRepository: Repository<MatchEntity>,
      private appService: AppService
   ) { }

   async parse() {
      let text: CricketDto[] = JSON.parse(fs.readFileSync(this.appService.getDirectory() + '/resources/iplData.json', 'utf8'))
      for (let index = 0; index < text.length; index++) {
         const match = text[index];
         let matchExists = await this.getMatchById(match.id);
         if (matchExists) {
            await this.matchRepository.update(match.id, match);
         } else {
            await this.matchRepository.save(match);
         }
      }
      return;
   }

   async getAllData(start: number, limit: number) {
      return await this.matchRepository.createQueryBuilder("match").limit(limit).offset(start).getMany();
   }

   async getMatchById(id: string | number) {
      return await this.matchRepository.findOne(id)
   }

   async getMatchByParams(params: FilterParameters) {
      return await this.matchRepository.find(params);
   }

   async deleteAllMatches() {
      return await this.matchRepository.clear()
   }

}
