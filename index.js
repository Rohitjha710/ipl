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
        TotalMatchesYearwise = require("./ipl/TotalMatchesPerYear");
        let TotalMatchesYearwiseArray = TotalMatchesYearwise(Matches);

        MatchesWonPerTeamPerYear = require("./ipl/MatchesWonPerTeamYearwise");
        let MatchesWonPerTeamPerYearArray = MatchesWonPerTeamPerYear(Matches);

        ExtraRunPerTeam2016 = require("./ipl/ExtraRunPerTeam2016");
        let ExtraRunPerTeam2016Array = ExtraRunPerTeam2016(Matches, Deliveries);

        TenEconomicalBowler2015 = require("./ipl/TenEconomicalBowler2015");
        let TenEconomicalBowler2015Array = TenEconomicalBowler2015(
          Matches,
          Deliveries
        );

        //Dumping values of first function in json file for visualization
        var IplFinalJsonResult = [];
        IplFinalJsonResult.push({
          TotalMatchesYearwiseArray: TotalMatchesYearwiseArray
        });
        IplFinalJsonResult.push({
          MatchesWonPerTeamPerYearArray: MatchesWonPerTeamPerYearArray
        });
        IplFinalJsonResult.push({
          ExtraRunPerTeam2016Array: ExtraRunPerTeam2016Array
        });
        IplFinalJsonResult.push({
          TenEconomicalBowler2015Array: TenEconomicalBowler2015Array
        });
        const fs = require("fs");
        IplFinalJsonResult = JSON.stringify(IplFinalJsonResult);

        fs.writeFileSync("./public/data.json", IplFinalJsonResult, fallback);

        function fallback(err) {
          console.log("Error");
        }
        //test begins

        //test ends
        /*total matches in year ends */

        /*Deliveries object scope ends */
      });
    /* Matches object scope ends*/
  });
