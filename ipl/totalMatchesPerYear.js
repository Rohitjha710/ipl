/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
const utilsfile = require('./utils');

const reduce = utilsfile.Reduce;
function totalMatchesYearwise(Matches) {
  let result = {};

  result = reduce(
    Matches,
    (matchDetail, match) => {
      const season = match.season;

      if (season in matchDetail) {
        matchDetail[season]++;
      } else {
        matchDetail[season] = 1;
      }

      return matchDetail;
    },
    result,
  );

  return result;
}
module.exports = totalMatchesYearwise;
