function TotalMatchesYearwise(Matches)
     {
        
        let Result={};
      let reduce=require('./utils');
      Result=reduce(Matches,((MatchDetail,match)=>{
        let season=match["season"];
        if(MatchDetail.hasOwnProperty(season))
        {
            MatchDetail[season]++
        }
        else{
            MatchDetail[season]=1;
        }

        return MatchDetail;
     }),Result);
     
     console.log(Result);
    return Result;
    }
    module.exports=TotalMatchesYearwise;