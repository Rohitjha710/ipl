let tenMatchesOf2017 = [
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
let output2017TenMatches = {
  "2017": 10
};

let tenDistributedMatches = [
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

let outputTenDistributedMatches = {
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

const functions = require("../ipl/totalMatchesPerYear");
describe("TotalmatchesYearwise", () => {
  it("Check for Ten matches of 2017", () => {
    expect(functions(tenMatchesOf2017)).toStrictEqual(output2017TenMatches);
  });
  it("Check for Ten matches of 2017", () => {
    expect(functions(tenDistributedMatches)).toStrictEqual(
      outputTenDistributedMatches
    );
  });
  it("Check for empty input", () => {
    expect(functions(input3)).toStrictEqual(output3);
  });
});
