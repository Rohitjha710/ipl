const csvFilePathmatches = "./dataset/matches.csv";
const csvFilePath1deliveries = "./dataset/deliveries.csv";
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePathmatches)
  .then(Matches => {
    csv()
      .fromFile(csvFilePath1deliveries)
      .then(Deliveries => {
        totalMatchesYearwise = require("./ipl/totalMatchesPerYear");
        let totalMatchesYearwiseArray = totalMatchesYearwise(Matches);

        matchesWonPerTeamPerYear = require("./ipl/matchesWonPerTeamYearwise");
        let matchesWonPerTeamPerYearArray = matchesWonPerTeamPerYear(Matches);

        extraRunPerTeam2016 = require("./ipl/extraRunPerTeam2016");
        let extraRunPerTeam2016Array = extraRunPerTeam2016(Matches, Deliveries);

        tenEconomicalBowler2015 = require("./ipl/tenEconomicalBowler2015");
        let tenEconomicalBowler2015Array = tenEconomicalBowler2015(
          Matches,
          Deliveries
        );

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
      });
  });
