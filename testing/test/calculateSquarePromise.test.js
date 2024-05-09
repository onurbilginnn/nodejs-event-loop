const { expect } = require("@jest/globals");
const calculateSquare = require("../calculateSquarePromise.js");

describe("calculateSquare", function () {
  it("should return square of the argument", function () {
    expect(calculateSquare(2)).resolves.toBe(4);
  });
  it("should return error", function () {
    calculateSquare("string").catch((error) => {
      expect(error.message).toBe("Argument type must be a number");
    });
  });
});
