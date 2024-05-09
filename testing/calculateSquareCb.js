function calculateSquare(number, cb) {
  setTimeout(function () {
    if (typeof number !== "number") {
      cb(new Error("Argument type must be a number"));
      return;
    }
    cb(null, number * number);
  }, 1000);
}

module.exports = calculateSquare;
