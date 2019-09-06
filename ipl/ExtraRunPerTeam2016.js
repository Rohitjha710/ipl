function ExtraRunPerTeam2016(match,deliveries)
{
    var ExtraRunsObject={};
    var Matches_2016=match.filter(a=>a["season"]==2016);
    var MatchId_2016=Matches_2016.map(x=>x["id"]);
    var count=0;
    let reduce=require('./utils');
    ExtraRunsObject=reduce(deliveries,((Matchdetail,delivery)=>{

             if(MatchId_2016.includes(delivery["match_id"]))
        {



                if(ExtraRunsObject.hasOwnProperty(delivery["bowling_team"]))
                {


                    Matchdetail[delivery["bowling_team"]]=parseInt(Matchdetail[delivery["bowling_team"]])+parseInt(delivery["extra_runs"]);

                }

                else
                {
                     Matchdetail[delivery["bowling_team"]]=delivery["extra_runs"];

                }
        }
        return Matchdetail;


    }),ExtraRunsObject)
    // for(let delivery in deliveries)
    // {
    //     if(MatchId_2016.includes(deliveries[delivery]["match_id"]))
    //     {



    //             if(ExtraRunsObject.hasOwnProperty(deliveries[delivery]["bowling_team"]))
    //             {


    //                 ExtraRunsObject[deliveries[delivery]["bowling_team"]]=parseInt(ExtraRunsObject[deliveries[delivery]["bowling_team"]])+parseInt(deliveries[delivery]["extra_runs"]);

    //             }

    //             else
    //             {
    //                  ExtraRunsObject[deliveries[delivery]["bowling_team"]]=deliveries[delivery]["extra_runs"];

    //             }
    //     }
    // }
    console.log(ExtraRunsObject);
    return ExtraRunsObject;
}
module.exports=ExtraRunPerTeam2016;