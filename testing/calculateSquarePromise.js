function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number !== "number")
        return reject(new Error("Argument type must be a number"));
      return resolve(number * number);
    }, 6000);
  });
}

module.exports = calculateSquare;
