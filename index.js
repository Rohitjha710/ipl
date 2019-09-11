const csvFilePathmatches = "./dataset/matches.csv";
const csvFilePath1deliveries = "./dataset/deliveries.csv";
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePathmatches)
  .then(Matches => {
    /*Matches object scope begins */
    csv()
      .fromFile(csvFilePath1deliveries)
      .then(Deliveries => {
        /*Deliveries object scope begins */
        totalMatchesYearwise = require("./ipl/TotalMatchesPerYear");
        let totalMatchesYearwiseArray = totalMatchesYearwise(Matches);

        matchesWonPerTeamPerYear = require("./ipl/MatchesWonPerTeamYearwise");
        let matchesWonPerTeamPerYearArray = matchesWonPerTeamPerYear(Matches);

        extraRunPerTeam2016 = require("./ipl/ExtraRunPerTeam2016");
        let extraRunPerTeam2016Array = extraRunPerTeam2016(Matches, Deliveries);

        tenEconomicalBowler2015 = require("./ipl/TenEconomicalBowler2015");
        let tenEconomicalBowler2015Array = tenEconomicalBowler2015(
          Matches,
          Deliveries
        );

        //Dumping values of  functions in json file for visualization
        var iplFinalJsonResult = [];
        iplFinalJsonResult.push({
          totalMatchesYearwiseArray: totalMatchesYearwiseArray
        });
        iplFinalJsonResult.push({
          matchesWonPerTeamPerYearArray: matchesWonPerTeamPerYearArray
        });
        iplFinalJsonResult.push({
          extraRunPerTeam2016Array: extraRunPerTeam2016Array
        });
        iplFinalJsonResult.push({
          tenEconomicalBowler2015Array: tenEconomicalBowler2015Array
        });
        const fs = require("fs");
        iplFinalJsonResult = JSON.stringify(iplFinalJsonResult);

        fs.writeFileSync("./public/data.json", iplFinalJsonResult, fallback);

        function fallback(err) {
          console.log("Error");
        }
        

        /*Deliveries object scope ends */
      });
    /* Matches object scope ends*/
  });
