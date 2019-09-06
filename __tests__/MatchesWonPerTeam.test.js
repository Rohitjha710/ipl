let FiveMatchesOf2017 = [
  { id: "1", season: "2017", winner: "Rps" },
  { id: "2", season: "2017", winner: "Csk" },
  { id: "3", season: "2017", winner: "Csk" },
  { id: "4", season: "2017", winner: "Rcb" },
  { id: "5", season: "2017", winner: "Rcb" }
];
let Output2017FiveMatches = {
  "2017": { Rps: 1, Csk: 2, Rcb: 2 }
};

let FiveDistributedMatches = [
  { id: "1", season: "2008", winner: "Rps" },
  { id: "2", season: "2019", winner: "Csk" },
  { id: "3", season: "2018", winner: "Csk" },
  { id: "4", season: "2017", winner: "Rcb" },
  { id: "5", season: "2016", winner: "Rcb" }
];

let OutputFiveDistributedMatches = {
  "2008": { Rps: 1 },
  "2017": { Rcb: 1 },
  "2016": { Rcb: 1 },
  "2018": { Csk: 1 },
  "2019": { Csk: 1 }
};
let input3 = {};
let output3 = {};

const functions = require("../ipl/MatchesWonPerTeamYearwise");
// describe("functions",()=>
// it('Check for ten matches of 2017',()=>{
// expect(functions(TenMatchesOf2017)).toStrictEqual(Output2017TenMatches);
// });
// it('Check for ten matches of different seasons',()=>{
//   expect(functions(TenDistributedMatches)).toStrictEqual(OutputTenDistributedMatches);
//   });

// });
// const functions=require('../ipl/TotalMatchesPerYear');
test("Check for ten matches of 2017", () => {
  expect(functions(FiveMatchesOf2017)).toStrictEqual(Output2017FiveMatches);
});

test("Check for ten matches of different seasons", () => {
  expect(functions(FiveDistributedMatches)).toStrictEqual(
    OutputFiveDistributedMatches
  );
});
test("Check for empty input", () => {
  expect(functions(input3)).toStrictEqual(output3);
});
