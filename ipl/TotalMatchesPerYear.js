function totalMatchesYearwise(Matches) {
  let result = {};
  let utilsfile = require("./utils");
  let reduce = utilsfile.Reduce;
  result = reduce(
    Matches,
    (matchDetail, match) => {
      let season = match["season"];
      if (matchDetail.hasOwnProperty(season)) {
        matchDetail[season]++;
      } else {
        matchDetail[season] = 1;
      }

      return matchDetail;
    },
    result
  );

  console.log(result);
  return result;
}
module.exports = totalMatchesYearwise;
