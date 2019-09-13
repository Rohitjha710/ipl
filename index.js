const csvFilePathmatches = './dataset/matches.csv';
const csvFilePath1deliveries = './dataset/deliveries.csv';
const csv = require('csvtojson');

csv()
  .fromFile(csvFilePathmatches)
  .then((Matches) => {
    csv()
      .fromFile(csvFilePath1deliveries)
      .then((Deliveries) => {
        // eslint-disable-next-line global-require
        const totalMatchesYearwise = require('./ipl/totalMatchesPerYear');
        const totalMatchesYearwiseArray = totalMatchesYearwise(Matches);

        // eslint-disable-next-line global-require
        const matchesWonPerTeamPerYear = require('./ipl/matchesWonPerTeamYearwise');
        const matchesWonPerTeamPerYearArray = matchesWonPerTeamPerYear(Matches);

        // eslint-disable-next-line global-require
        const extraRunPerTeam2016 = require('./ipl/extraRunPerTeam2016');
        const extraRunPerTeam2016Array = extraRunPerTeam2016(Matches, Deliveries);

        // eslint-disable-next-line global-require
        const tenEconomicalBowler2015 = require('./ipl/tenEconomicalBowler2015');
        const tenEconomicalBowler2015Array = tenEconomicalBowler2015(
          Matches,
          Deliveries,
        );

        let iplFinalJsonResult = [];
        iplFinalJsonResult.push({
          totalMatchesYearwiseArray,
        });
        iplFinalJsonResult.push({
          matchesWonPerTeamPerYearArray,
        });
        iplFinalJsonResult.push({
          extraRunPerTeam2016Array,
        });
        iplFinalJsonResult.push({
          tenEconomicalBowler2015Array,
        });
        // eslint-disable-next-line global-require
        const fs = require('fs');
        iplFinalJsonResult = JSON.stringify(iplFinalJsonResult);

        fs.writeFileSync('./public/data.json', iplFinalJsonResult, () => {
        });
      });
  });
