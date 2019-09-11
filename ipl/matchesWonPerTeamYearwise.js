let utilsfile = require("./utils");
  let reduce = utilsfile.Reduce;
function matchesWonPerTeamPerYear(Matches) {
  let result = {};
  
  result = reduce(
    Matches,
    (matchDetail, match) => {
      let season = match["season"];
      var winner = match["winner"];
      if (winner === "") {
        return matchDetail;
      }

      if (matchDetail.hasOwnProperty(season)) {
        if (matchDetail[season].hasOwnProperty(winner)) {
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

  console.log(result);
  return result;
}
module.exports = matchesWonPerTeamPerYear;
