/* eslint-disable no-param-reassign */
const utilsfile = require('./utils');

const reduce = utilsfile.Reduce;
const map = utilsfile.Map;
const filter = utilsfile.Filter;
function extraRunPerTeam2016(matches, deliveries) {
  let extraRunsObject = {};
  const matches2016 = filter(matches, (match) => match.season === 2016);
  const matchId2016 = map(matches2016, (match) => match.id);

  extraRunsObject = reduce(
    deliveries,
    (matchdetail, delivery) => {
      if (matchId2016.includes(delivery.match_id)) {
        if (delivery.bowling_team in matchdetail) {
          // eslint-disable-next-line radix
          matchdetail[delivery.bowling_team] = parseInt(matchdetail[delivery.bowling_team])
            // eslint-disable-next-line radix
            + parseInt(delivery.extra_runs);
        } else {
          matchdetail[delivery.bowling_team] = delivery.extra_runs;
        }
      }
      return matchdetail;
    },
    extraRunsObject,
  );

  return extraRunsObject;
}
module.exports = extraRunPerTeam2016;
