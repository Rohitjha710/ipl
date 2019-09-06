function ExtraRunPerTeam2016(match,deliveries)
{
    let utilsfile=require('./utils');
      let reduce=utilsfile.Reduce;
      let map=utilsfile.Map;
      let filter=utilsfile.Filter;
    var ExtraRunsObject={};
    var Matches_2016=filter(match,a=>a["season"]==2016);
    var MatchId_2016=map(Matches_2016,x=>x["id"]);
    var count=0;
    
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