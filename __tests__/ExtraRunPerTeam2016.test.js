let matchinputfivematch = [
  { season: 2016, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 }
];
let fivedeliveries = [
  { match_id: 1, bowling_team: "kkr", extra_runs: 1 },
  { match_id: 2, bowling_team: "kkr", extra_runs: 2 },
  { match_id: 3, bowling_team: "csk", extra_runs: 0 },
  { match_id: 4, bowling_team: "csk", extra_runs: 4 },
  { match_id: 5, bowling_team: "rcb", extra_runs: 1 }
];
let outputfivedeliveries = { kkr: 3, csk: 4, rcb: 1 };
let distributedmatch = [
  { season: 2017, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 }
];
let distributeddelivery = [
  { match_id: 1, bowling_team: "kkr", extra_runs: 1 },
  { match_id: 6, bowling_team: "kkr", extra_runs: 2 },
  { match_id: 3, bowling_team: "csk", extra_runs: 0 },
  { match_id: 4, bowling_team: "csk", extra_runs: 4 },
  { match_id: 5, bowling_team: "rcb", extra_runs: 1 }
];
let distributedoutput = { csk: 4, rcb: 1 };
let emptyinput = {};
let emptyoutput = {};

const functions = require("../ipl/ExtraRunPerTeam2016");
describe("Extra Runs conceded per team", () => {
  it("5 matches of 2016", () => {
    expect(functions(matchinputfivematch, fivedeliveries)).toStrictEqual(
      outputfivedeliveries
    );
  });

  test("Check for empty input", () => {
    expect(functions(distributedmatch, distributeddelivery)).toStrictEqual(
      distributedoutput
    );
  });
  test("Check for empty input", () => {
    expect(functions({}, emptyinput)).toStrictEqual(emptyoutput);
  });
});
