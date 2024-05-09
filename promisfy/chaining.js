function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number")
        return reject(new Error("Argument of type number is expected"));
      resolve(number * number);
    }, 1000);
  });
}

calculateSquare(1)
  .then((value) => calculateSquare("string"))
  .then(
    (value2) => console.log(value2),
    (reason) => {
      console.log("error happened: " + reason);
    }
  );
