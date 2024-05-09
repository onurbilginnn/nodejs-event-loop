function calculateSquare(number, cb) {
  setTimeout(function () {
    if (typeof number !== "number") {
      cb(new Error("Argument type number is expected"));
      return;
    }
    const result = number * number;
    cb(null, result);
  }, 1000);
}

calculateSquare(3, function (error, result) {
  if (error) console.log("There is an error:\n", String(error));
  else console.log(result);
});
