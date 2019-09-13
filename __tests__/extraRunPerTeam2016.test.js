const matchInputFiveMatch = [
  { season: 2016, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 },
];
const fiveDeliveries = [
  { match_id: 1, bowling_team: 'kkr', extra_runs: 1 },
  { match_id: 2, bowling_team: 'kkr', extra_runs: 2 },
  { match_id: 3, bowling_team: 'csk', extra_runs: 0 },
  { match_id: 4, bowling_team: 'csk', extra_runs: 4 },
  { match_id: 5, bowling_team: 'rcb', extra_runs: 1 },
];
const outputFiveDeliveries = { kkr: 3, csk: 4, rcb: 1 };
const distributedMatch = [
  { season: 2017, id: 1 },
  { season: 2016, id: 2 },
  { season: 2016, id: 3 },
  { season: 2016, id: 4 },
  { season: 2016, id: 5 },
];
const distributedDelivery = [
  { match_id: 1, bowling_team: 'kkr', extra_runs: 1 },
  { match_id: 6, bowling_team: 'kkr', extra_runs: 2 },
  { match_id: 3, bowling_team: 'csk', extra_runs: 0 },
  { match_id: 4, bowling_team: 'csk', extra_runs: 4 },
  { match_id: 5, bowling_team: 'rcb', extra_runs: 1 },
];
const distributedOutput = { csk: 4, rcb: 1 };
const emptyInput = {};
const emptyOutput = {};

const functions = require('../ipl/extraRunPerTeam2016');

// eslint-disable-next-line no-undef
describe('Extra Runs conceded per team', () => {
  it('5 matches of 2016', () => {
    expect(functions(matchInputFiveMatch, fiveDeliveries)).toStrictEqual(
      outputFiveDeliveries,
    );
  });

  test('Check for empty input', () => {
    expect(functions(distributedMatch, distributedDelivery)).toStrictEqual(
      distributedOutput,
    );
  });
  test('Check for empty input', () => {
    expect(functions({}, emptyInput)).toStrictEqual(emptyOutput);
  });
});
