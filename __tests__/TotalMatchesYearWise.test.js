let TenMatchesOf2017 = [
  { id: "1", season: "2017" },
  { id: "2", season: "2017" },
  { id: "3", season: "2017" },
  { id: "4", season: "2017" },
  { id: "5", season: "2017" },
  { id: "6", season: "2017" },
  { id: "7", season: "2017" },
  { id: "8", season: "2017" },
  { id: "9", season: "2017" },
  { id: "10", season: "2017" }
];
let Output2017TenMatches = {
  "2017": 10
};

let TenDistributedMatches = [
  { id: "1", season: "2017" },
  { id: "2", season: "2017" },
  { id: "3", season: "2016" },
  { id: "4", season: "2016" },
  { id: "5", season: "2015" },
  { id: "6", season: "2015" },
  { id: "7", season: "2008" },
  { id: "8", season: "2009" },
  { id: "9", season: "2010" },
  { id: "10", season: "2011" }
];

let OutputTenDistributedMatches = {
  "2017": 2,
  "2017": 2,
  "2015": 2,
  "2016": 2,
  "2008": 1,
  "2009": 1,
  "2010": 1,
  "2011": 1
};
let input3 = {};
let output3 = {};

const functions = require("../ipl/TotalMatchesPerYear");
describe("TotalmatchesYearwise", () => {
  it("Check for Ten matches of 2017", () => {
    expect(functions(TenMatchesOf2017)).toStrictEqual(Output2017TenMatches);
  });
  it("Check for Ten matches of 2017", () => {
    expect(functions(TenDistributedMatches)).toStrictEqual(
      OutputTenDistributedMatches
    );
  });
  it("Check for empty input", () => {
    expect(functions(input3)).toStrictEqual(output3);
  });
});
