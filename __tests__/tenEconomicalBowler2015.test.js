const tenMatches = [
  { season: 2015, id: 10 },
  { season: 2015, id: 9 },
  { season: 2015, id: 8 },
  { season: 2015, id: 7 },
  { season: 2015, id: 6 },
  { season: 2015, id: 1 },
  { season: 2015, id: 2 },
  { season: 2015, id: 3 },
  { season: 2015, id: 4 },
  { season: 2015, id: 5 },
];

const tenDeliveries = [
  {
    match_id: 6, bowler: 'R', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 7, bowler: 'S', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 8, bowler: 'T', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 9, bowler: 'U', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 10, bowler: 'V', wide_runs: 0, noball_runs: 0, batsman_runs: 3,
  },
  {
    match_id: 1, bowler: 'W', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 2, bowler: 'X', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 3, bowler: 'Y', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 4, bowler: 'Z', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 5, bowler: 'A', wide_runs: 0, noball_runs: 0, batsman_runs: 3,
  },
];
const tenDeliveriesOutput = {
  R: 6,
  S: 6,
  T: 12,
  U: 12,
  V: 18,
  W: 6,
  X: 6,
  Y: 12,
  Z: 12,
  A: 18,
};
const distributedDeliveryOutput = {
  R: 18,
  T: 12,
  W: 6,
  X: 6,
  Y: 12,
  Z: 12,
  A: 18,
};
const distributedMatch = [
  { season: 2016, id: 10 },
  { season: 2015, id: 9 },
  { season: 2015, id: 8 },
  { season: 2015, id: 7 },
  { season: 2015, id: 6 },
  { season: 2015, id: 1 },
  { season: 2015, id: 2 },
  { season: 2015, id: 3 },
  { season: 2015, id: 4 },
  { season: 2015, id: 5 },
];
const distributedDelivery = [
  {
    match_id: 6, bowler: 'R', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 7, bowler: 'R', wide_runs: 1, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 8, bowler: 'T', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 9, bowler: 'T', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 10, bowler: 'V', wide_runs: 0, noball_runs: 0, batsman_runs: 3,
  },
  {
    match_id: 1, bowler: 'W', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 2, bowler: 'X', wide_runs: 0, noball_runs: 0, batsman_runs: 1,
  },
  {
    match_id: 3, bowler: 'Y', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 4, bowler: 'Z', wide_runs: 0, noball_runs: 0, batsman_runs: 2,
  },
  {
    match_id: 5, bowler: 'A', wide_runs: 0, noball_runs: 0, batsman_runs: 3,
  },
];

const emptyInput = {};
const emptyOutput = {};

const functions = require('../ipl/tenEconomicalBowler2015');

describe('Extra Runs conceded per team', () => {
  test('Check for five matches', () => {
    expect(functions(tenMatches, tenDeliveries)).toStrictEqual(
      tenDeliveriesOutput,
    );
  });
  test('Check for five matches', () => {
    expect(functions(distributedMatch, distributedDelivery)).toStrictEqual(
      distributedDeliveryOutput,
    );
  });

  it('Check for empty input', () => {
    expect(functions({}, emptyInput)).toStrictEqual(emptyOutput);
  });
});
