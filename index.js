const csvFilePathmatches = './dataset/matches.csv'
const csvFilePath1deliveries = './dataset/deliveries.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePathmatches)
    .then((Matches) => {
/*Matches object scope begins */
        csv()
            .fromFile(csvFilePath1deliveries)
                .then((Deliveries)=>{
/*Deliveries object scope begins */
TotalMatchesYearwise=require('./ipl/TotalMatchesPerYear');
let TotalMatchesYearwiseArray=TotalMatchesYearwise(Matches);
     
MatchesWonPerTeamPerYear=require('./ipl/MatchesWonPerTeamYearwise');
let MatchesWonPerTeamPerYearArray=MatchesWonPerTeamPerYear(Matches);

      

    //Dumping values of first function in json file for visualization
     const fs=require('fs');
     let ResultinJson=JSON.stringify(TotalMatchesYearwiseArray);
     fs.writeFileSync('./public/data.json',ResultinJson,fallback);
     function fallback(err)
     {
         console.log("Error");
     }
     ResultinJson=JSON.stringify(MatchesWonPerTeamPerYearArray);
     fs.writeFileSync('./public/data1.json',ResultinJson,fallback);



    /*total matches in year ends */


/*Deliveries object scope ends */
 });
/* Matches object scope ends*/
})
