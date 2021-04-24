import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
   name: 'Match'
})
export class MatchEntity {
   @PrimaryColumn()
   id: string;

   @Column()
   city: string;
   
   @Column()
   date: string;
   
   @Column()
   player_of_match: string;
   
   @Column()
   venue: string;
   
   @Column()
   neutral_venue: string;
   
   @Column()
   team1: string;
   
   @Column()
   team2: string;
   
   @Column()
   toss_winner: string;
   
   @Column()
   toss_decision: string;
   
   @Column()
   winner: string;
   
   @Column()
   result: string;
   
   @Column()
   result_margin: string;
   
   @Column()
   eliminator: string;
   
   @Column()
   method: string;
   
   @Column()
   umpire1: string;
   
   @Column()
   umpire2: string;
}