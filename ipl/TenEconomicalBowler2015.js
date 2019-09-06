function TenEconomicalBowler2015(match,deliveries)
{
    var EconomyOfBowler={};
    var Matches_2015=match.filter(a=>a["season"]==2015);
    var MatchId_2015=Matches_2015.map(x=>x["id"]);

    var count=0;
    for(let delivery in deliveries)

   {
        if(MatchId_2015.includes(deliveries[delivery]["match_id"]))
        {



                if(EconomyOfBowler.hasOwnProperty(deliveries[delivery]["bowler"]))
                {
                    if(deliveries[delivery]["wide_runs"]!=0 ||deliveries[delivery]["noball_runs"]!=0)
                    {}
                    else
                    {
                        EconomyOfBowler[deliveries[delivery]["bowler"]]['Balls']++;
                    }
                    EconomyOfBowler[deliveries[delivery]["bowler"]]['Run']=parseInt(EconomyOfBowler[deliveries[delivery]["bowler"]]['Run'])+parseInt(deliveries[delivery]["noball_runs"])+parseInt(deliveries[delivery]["wide_runs"])+parseInt(deliveries[delivery]["batsman_runs"]);
                   /* ExtraRunsObject[deliveries[delivery]["bowling_team"]]=parseInt(ExtraRunsObject[deliveries[delivery]["bowling_team"]])+parseInt(deliveries[delivery]["extra_runs"]);
                */
                }

                else
                {

                    EconomyOfBowler[deliveries[delivery]["bowler"]]={'Run':deliveries[delivery]["total_runs"],'Balls':1}

                }
        }
    }
    var bowler_economy=[];
    for(let bowler in EconomyOfBowler)
    {
        EconomyOfBowler[bowler]["economy"]=6*parseInt(EconomyOfBowler[bowler]["Run"])/parseInt(EconomyOfBowler[bowler]["Balls"]);
        delete EconomyOfBowler[bowler]['Run'];
        delete EconomyOfBowler[bowler]['Balls'];
        bowler_economy.push([bowler,EconomyOfBowler[bowler]["economy"]]);
    }
    bowler_economy.sort(function(a, b){
        return a[1]-b[1];
    })
    TopTenLeastEconomyBowler2015=bowler_economy.slice(0,10);
    let economyresult={};
    for(let a in TopTenLeastEconomyBowler2015)
    {
        economyresult[TopTenLeastEconomyBowler2015[a][0]]=TopTenLeastEconomyBowler2015[a][1]
    }
    console.log(economyresult);
 return economyresult;



}
module.exports=TenEconomicalBowler2015;