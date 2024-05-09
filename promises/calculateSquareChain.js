function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number")
        return reject(new Error("Argument type must be a number"));
      return resolve(number * number);
    }, 1000);
  });
}

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(3);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(4);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(5);
  })
  .then((value) => {
    console.log(value);
    return calculateSquare(6);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log("An error occured: " + error));
