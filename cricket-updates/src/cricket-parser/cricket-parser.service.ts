import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { AppService } from 'src/app.service';
import { Repository } from 'typeorm';
import { CricketDto } from './dto/cricket.dto';
import { CricketEntity } from './entity/cricket.entity';
@Injectable()
export class CricketParserService {

   constructor(
      @InjectRepository(CricketEntity)
      private cricketRepository: Repository<CricketEntity>,
      private appService: AppService
   ) { }

   async parse() {
      let text: CricketDto[] = JSON.parse(fs.readFileSync(this.appService.getDirectory() + '/resources/iplData.json', 'utf8'))
      for (let index = 0; index < text.length; index++) {
         const match = text[index];
         let matchExists = await this.getMatchById(match.id);
         if(matchExists) {
            await this.cricketRepository.update(match.id,match);
         } else {
            await this.cricketRepository.save(match);
         }
      }
      return this.getAllData();
   }

   async getAllData() {
      return await this.cricketRepository.find();
   }

   async getMatchById(id: string | number) {
      return await this.cricketRepository.findOne(id)
   }

   async deleteAllMatches() {
      return await this.cricketRepository.clear()
   }

}
