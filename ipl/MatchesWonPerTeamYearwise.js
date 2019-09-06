function MatchesWonPerTeamPerYear(Matches)
{
    let Result={};
    let utilsfile=require('./utils');
      let reduce=utilsfile.Reduce;
    Result=reduce(Matches,((MatchDetail,match)=>{
            let season=match["season"];
        var winner=match["winner"];

        if(MatchDetail.hasOwnProperty(season))
        {
            if(MatchDetail[season].hasOwnProperty(winner))
            {
                MatchDetail[season][winner]++;
            }
            else
            {
                MatchDetail[season][winner]=1;
            }
        }
        else{
            MatchDetail[season]={};
            MatchDetail[season][winner]=1;
        } 
        return MatchDetail; 
    }),Result)
   

         console.log(Result);
         return Result;
}
module.exports=MatchesWonPerTeamPerYear;