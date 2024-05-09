function askDealer(deal, responseTime) {
  return new Promise((resolve, reject) => {
    if (typeof deal === "string")
      return setTimeout(
        () => reject("Must use a number as an argument"),
        responseTime
      );
    return setTimeout(() => resolve(deal), responseTime);
  });
}

const askFirstDealer = askDealer(3000, 4000);
const askSecondDealer = askDealer(400, 1000);
const askThirdDealer = askDealer(1000, 2000);

Promise.race([askFirstDealer, askSecondDealer, askThirdDealer]).then((value) =>
  console.log(value)
);
