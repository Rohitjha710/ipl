/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
const utilsfile = require('./utils');

const reduce = utilsfile.Reduce;
const map = utilsfile.Map;
const filter = utilsfile.Filter;
function tenEconomicalBowler2015(match, deliveries) {
  let economyOfBowler = {};
  const matches2015 = filter(match, (a) => a.season == 2015);
  const matchId2015 = map(matches2015, (x) => x.id);

  economyOfBowler = reduce(
    deliveries,
    (matchdetail, delivery) => {
      if (matchId2015.includes(delivery.match_id)) {
        if (delivery.bowler in matchdetail) {
          if (delivery.wide_runs != 0 || delivery.noball_runs != 0) {
          } else {
            matchdetail[delivery.bowler].balls++;
          }
          matchdetail[delivery.bowler].run = parseInt(matchdetail[delivery.bowler].run)
            + parseInt(delivery.noball_runs)
            + parseInt(delivery.wide_runs)
            + parseInt(delivery.batsman_runs);
        } else {
          matchdetail[delivery.bowler] = {
            run:
              parseInt(delivery.noball_runs)
              + parseInt(delivery.wide_runs)
              + parseInt(delivery.batsman_runs),
            balls: 1,
          };
        }
      }
      return matchdetail;
    },
    economyOfBowler,
  );

  const bowlerEconomy = [];
  for (const bowler in economyOfBowler) {
    economyOfBowler[bowler].economy = (6 * parseInt(economyOfBowler[bowler].run))
      / parseInt(economyOfBowler[bowler].balls);

    bowlerEconomy.push([bowler, economyOfBowler[bowler].economy]);
  }
  bowlerEconomy.sort((a, b) => a[1] - b[1]);
  const topTenLeastEconomyBowler2015 = bowlerEconomy.slice(0, 10);
  const economyResult = {};
  for (const a in topTenLeastEconomyBowler2015) {
    economyResult[topTenLeastEconomyBowler2015[a][0]] = topTenLeastEconomyBowler2015[a][1];
  }

  return economyResult;
}
module.exports = tenEconomicalBowler2015;
