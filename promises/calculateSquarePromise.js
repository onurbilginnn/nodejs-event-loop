// **** Same Function with Callback ****

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

// **** Same Function with Callback ****

function calculateSquarePromise(number) {
  return new Promise((res, reject) => {
    setTimeout(function () {
      if (typeof number !== "number") {
        reject(new Error("Expecting a number"));
      }
      res(number * number);
    }, 1000);
  });
}

calculateSquarePromise(3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

calculateSquarePromise("string is not allowed")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
