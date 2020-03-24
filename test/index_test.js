const assert = require("assert");
const MathStuff = require("../MathStuff.js");

describe("Math", () => {
  describe(".multiply()", () => {
    it("2 * 2 returns 4", () => {
      assert.equal(4, MathStuff.multiply(2, 2));
    });
  });
  describe(".divison()", () => {
    it("10 / 2 returns 5", () => {
      assert.equal(5, MathStuff.division(10, 2));
    });
  });
});
