const utilsfile = require("./utils");

const reduce = utilsfile.Reduce;
function matchesWonPerTeamPerYear(Matches) {
  let result = {};

  result = reduce(
    Matches,
    (matchDetail, match) => {
      let season = match["season"];
      let winner = match["winner"];
      if (winner === "") {
        return matchDetail;
      }

      if (season in matchDetail) {
        if (winner in matchDetail[season]) {
          matchDetail[season][winner]++;
        } else {
          matchDetail[season][winner] = 1;
        }
      } else {
        matchDetail[season] = {};
        matchDetail[season][winner] = 1;
      }
      return matchDetail;
    },
    result
  );

  return result;
}
module.exports = matchesWonPerTeamPerYear;
