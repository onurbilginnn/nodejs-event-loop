const { expect } = require("@jest/globals");
const calculateSquare = require("../calculateSquareCb.js");

describe("calculateSquare", function () {
  it("should return square of the argument", function () {
    calculateSquare(3, function (error, result) {
      expect(result).toBe(9);
    });
  });
  it("should return error", function () {
    calculateSquare("3", function (error, result) {
      expect(error).not.toBe(null);
      expect(error.message).toBe("Argument type must be a number");
    });
  });
});
