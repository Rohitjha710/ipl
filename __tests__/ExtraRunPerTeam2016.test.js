let input3 = {};
let output3 = {};

const functions = require("../ipl/ExtraRunPerTeam2016");

test("Check for empty input", () => {
  expect(functions(input3)).toStrictEqual(output3);
});
