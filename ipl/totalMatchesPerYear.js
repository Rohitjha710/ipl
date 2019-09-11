let utilsfile = require("./utils");
  let reduce = utilsfile.Reduce;
function totalMatchesYearwise(Matches) {
  let result = {};
  
  result = reduce(
    Matches,
    (matchDetail, match) => {
      let season = match["season"];
    
      if (season in matchDetail)
      {
        matchDetail[season]++;
      } else {
        matchDetail[season] = 1;
      }

      return matchDetail;
    },
    result
  );


  return result;
}
module.exports = totalMatchesYearwise;
