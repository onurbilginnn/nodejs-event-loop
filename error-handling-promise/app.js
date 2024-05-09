function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number")
        return reject(new Error("Argument of type number is expected"));
      return resolve(number * number);
    }, 1000);
  });
}

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare("string");
  })
  .then((value2) => console.log(value2))
  .catch((reason) => {
    console.log("error happened: " + reason);
  });
