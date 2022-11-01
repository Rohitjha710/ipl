/* eslint-disable semi */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
// const utilsfile = require('./utils');

// const reduce = utilsfile.Reduce;
const totalMatchesYearwise = (Matches)=> {
  let a = [
    { id: 1, season: 2008, winner: "rcb" },
    { id: 2, season: 2008, winner: "rcb" },
    { id: 3, season: 2009, winner: "rcb" },
    { id: 5, season: 2008, winner: "rcb" }
  ];
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    let currentMatchObject = a[i];
    let currentMatchSeason = currentMatchObject.season;
    if (currentMatchSeason in obj) {
      obj[currentMatchSeason]++;
    } else {
      obj[currentMatchSeason] = 1;
    }
  }
  console.log(obj);
  // let result = {};

  // result = reduce(
  //   Matches,
  //   (matchDetail, match) => {
  //     const season = match.season;

  //     if (season in matchDetail) {
  //       matchDetail[season]++;
  //     } else {
  //       matchDetail[season] = 1;
  //     }

  //     return matchDetail;
  //   },
  //   result,
  // );

  // return result;
}
module.exports = totalMatchesYearwise;
