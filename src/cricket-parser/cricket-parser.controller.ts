import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CricketParserService } from './cricket-parser.service';
import FilterParameters from './dto/filterParams.dto';
@ApiTags('Ipl dashboard')
@Controller('ipl')
export class CricketParserController {

   constructor(private readonly cricketParserService: CricketParserService) {
   }

   @Get("parser")
   async getDataFromStaticFile() {
      await this.cricketParserService.parse()
      return {
         message: "Data parsed successfully"
      }
   }

   @Get("all")
   async getAllData(@Query("start") start: number, @Query("limit") limit: number) {
      let parsedData = await this.cricketParserService.getAllData(start, limit)
      return { ...parsedData }
   }

   @ApiBody({ type: FilterParameters,required:false })
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
