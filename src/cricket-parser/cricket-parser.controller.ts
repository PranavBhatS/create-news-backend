import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CricketParserService } from './cricket-parser.service';
import FilterParameters from './dto/filterParams.dto';

@Controller('ipl')
export class CricketParserController {

   constructor(private readonly cricketParserService: CricketParserService) {
   }

   @Get("parser")
   async getDataFromStaticFile() {
      let parsedData = await this.cricketParserService.parse()
      return { ...parsedData }
   }

   @Get("all")
   async getAllData() {
      let parsedData = await this.cricketParserService.getAllData()
      return { ...parsedData }
   }

   @Post("filter")
   async getMatchbyParameters(@Body() filterParams: FilterParameters) {
      return this.cricketParserService.getMatchByParams(filterParams);
   }

   @Get("clearDb")
   async clearDb() {
      await this.cricketParserService.deleteAllMatches()
      return {
         message: "everything cleared"
      }
   }


}
