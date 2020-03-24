const assert = require("assert");
const MathStuff = require("../MathStuff.js");

describe("Math", () => {
  describe(".add()", () => {
    it("3 + 3 returns 6", () => {
      assert.equal(6, MathStuff.add(3, 3));
    });

    it("-3 + 3 returns 0", () => {
      assert.equal(0, MathStuff.add(-3, 3));
    });

    it("9999 + 1 returns 10000", () => {
      assert.equal(10000, MathStuff.add(9999, 1));
    });
  });

  describe(".subtract()", () => {
    it("5 - 2 returns 3", () => {
      assert.equal(3, MathStuff.subtract(5, 2));
    });

    it("3 - 3 returns 0", () => {
      assert.equal(0, MathStuff.subtract(3, 3));
    });

    it("10 - 20 returns -10", () => {
      assert.equal(-10, MathStuff.subtract(10, 20));
    });
  });

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
