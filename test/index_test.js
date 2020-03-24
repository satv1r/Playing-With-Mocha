const assert = require("assert");
const MathStuff = require("../MathStuff.js");

describe("Math", () => {
  describe(".add()", () => {
    it("3 + 3 returns 6", () => {
      assert.equal(6, MathStuff.add(3, 3));
    });
  });
  describe(".subtract()", () => {
    it("5 - 2 returns 3", () => {
      assert.equal(3, MathStuff.subtract(5, 2));
    });
  });
  describe(".multiply()", () => {
    it("2 * 2 returns 4", () => {
      assert.equal(4, MathStuff.multiply(2, 2));
    });
  });
});
