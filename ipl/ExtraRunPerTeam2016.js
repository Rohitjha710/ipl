function extraRunPerTeam2016(matches, deliveries) {
  let utilsfile = require("./utils");
  let reduce = utilsfile.Reduce;
  let map = utilsfile.Map;
  let filter = utilsfile.Filter;
  let extraRunsObject = {};
  let matches2016 = filter(matches, match => match["season"] == 2016);
  let matchId2016 = map(matches2016, match => match["id"]);

  extraRunsObject = reduce(
    deliveries,
    (matchdetail, delivery) => {
      if (matchId2016.includes(delivery["match_id"])) {
        if (matchdetail.hasOwnProperty(delivery["bowling_team"])) {
          matchdetail[delivery["bowling_team"]] =
            parseInt(matchdetail[delivery["bowling_team"]]) +
            parseInt(delivery["extra_runs"]);
        } else {
          matchdetail[delivery["bowling_team"]] = delivery["extra_runs"];
        }
      }
      return matchdetail;
    },
    extraRunsObject
  );
 
  console.log(extraRunsObject);
  return extraRunsObject;
}
module.exports = extraRunPerTeam2016;
