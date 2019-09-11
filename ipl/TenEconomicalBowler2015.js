function tenEconomicalBowler2015(match, deliveries) {
  let utilsfile = require("./utils");
  let reduce = utilsfile.Reduce;
  let map = utilsfile.Map;
  let filter = utilsfile.Filter;
  let economyOfBowler = {};
  let matches2015 = filter(match, a => a["season"] == 2015);
  let matchId2015 = map(matches2015, x => x["id"]);

  economyOfBowler = reduce(
    deliveries,
    (matchdetail, match) => {
      if (matchId2015.includes(match["match_id"])) {
        if (matchdetail.hasOwnProperty(match["bowler"])) {
          if (match["wide_runs"] != 0 || match["noball_runs"] != 0) {
          } else {
            matchdetail[match["bowler"]]["balls"]++;
          }
          matchdetail[match["bowler"]]["run"] =
            parseInt(matchdetail[match["bowler"]]["run"]) +
            parseInt(match["noball_runs"]) +
            parseInt(match["wide_runs"]) +
            parseInt(match["batsman_runs"]);
          
        } else {
          matchdetail[match["bowler"]] = {
            run:
              /*match["total_runs"]*/ parseInt(match["noball_runs"]) +
              parseInt(match["wide_runs"]) +
              parseInt(match["batsman_runs"]),
            balls: 1
          };
        }
      }
      return matchdetail;
    },
    economyOfBowler
  );

  let bowlerEconomy = [];
  for (let bowler in economyOfBowler) {
    economyOfBowler[bowler]["economy"] =
      (6 * parseInt(economyOfBowler[bowler]["run"])) /
      parseInt(economyOfBowler[bowler]["balls"]);
    
    bowlerEconomy.push([bowler, economyOfBowler[bowler]["economy"]]);
  }
  bowlerEconomy.sort(function(a, b) {
    return a[1] - b[1];
  });
  topTenLeastEconomyBowler2015 = bowlerEconomy.slice(0, 10);
  let economyResult = {};
  for (let a in topTenLeastEconomyBowler2015) {
    economyResult[topTenLeastEconomyBowler2015[a][0]] =
      topTenLeastEconomyBowler2015[a][1];
  }
  console.log(economyResult);
  return economyResult;
}
module.exports = tenEconomicalBowler2015;
