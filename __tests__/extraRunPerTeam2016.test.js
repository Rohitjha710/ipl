let matchInputFiveMatch = [
  { season: 2016, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 }
];
let fiveDeliveries = [
  { match_id: 1, bowling_team: "kkr", extra_runs: 1 },
  { match_id: 2, bowling_team: "kkr", extra_runs: 2 },
  { match_id: 3, bowling_team: "csk", extra_runs: 0 },
  { match_id: 4, bowling_team: "csk", extra_runs: 4 },
  { match_id: 5, bowling_team: "rcb", extra_runs: 1 }
];
let outputFiveDeliveries = { kkr: 3, csk: 4, rcb: 1 };
let distributedMatch = [
  { season: 2017, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 }
];
let distributedDelivery = [
  { match_id: 1, bowling_team: "kkr", extra_runs: 1 },
  { match_id: 6, bowling_team: "kkr", extra_runs: 2 },
  { match_id: 3, bowling_team: "csk", extra_runs: 0 },
  { match_id: 4, bowling_team: "csk", extra_runs: 4 },
  { match_id: 5, bowling_team: "rcb", extra_runs: 1 }
];
let distributedOutput = { csk: 4, rcb: 1 };
let emptyInput = {};
let emptyOutput = {};

const functions = require("../ipl/extraRunPerTeam2016");
describe("Extra Runs conceded per team", () => {
  it("5 matches of 2016", () => {
    expect(functions(matchInputFiveMatch, fiveDeliveries)).toStrictEqual(
      outputFiveDeliveries
    );
  });

  test("Check for empty input", () => {
    expect(functions(distributedMatch, distributedDelivery)).toStrictEqual(
      distributedOutput
    );
  });
  test("Check for empty input", () => {
    expect(functions({}, emptyInput)).toStrictEqual(emptyOutput);
  });
});
