import { ApiProperty } from "@nestjs/swagger";

class FilterParameters {
   @ApiProperty({
      required: false
   })
   city?: string;

   @ApiProperty({
      required: false
   })
   date?: string;

   @ApiProperty({
      required: false
   })
   player_of_match?: string;

   @ApiProperty({
      required: false
   })
   venue?: string;

   @ApiProperty({
      required: false
   })
   neutral_venue?: string;

   @ApiProperty({
      required: false
   })
   team1?: string;

   @ApiProperty({
      required: false
   })
   team2?: string;

   @ApiProperty({
      required: false
   })
   toss_winner?: string;

   @ApiProperty({
      required: false
   })
   toss_decision?: string;

   @ApiProperty({
      required: false
   })
   winner?: string;

   @ApiProperty({
      required: false
   })
   result?: string;

   @ApiProperty({
      required: false
   })
   result_margin?: string;

   @ApiProperty({
      required: false
   })
   eliminator?: string;

   @ApiProperty({
      required: false,
   })
   method?: string;

   @ApiProperty({
      required: false
   })
   umpire1?: string;

   @ApiProperty({
      required: false
   })
   umpire2?: string;

}
export default FilterParameters;