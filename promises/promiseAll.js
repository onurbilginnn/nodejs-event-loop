function askDealer(deal, responseTime) {
  return new Promise((resolve, reject) => {
    if (typeof deal === "string")
      return setTimeout(() => reject(deal), responseTime);
    return setTimeout(() => resolve(deal), responseTime);
  });
}

const askFirstDealer = askDealer(8000, 6000);
const askSecondDealer = askDealer("Not a suitable car", 5000);
const askThirdDealer = askDealer(10000, 8000);

Promise.all([
  askFirstDealer.catch((error) => error),
  askSecondDealer.catch((error) => error),
  askThirdDealer.catch((error) => error),
  // Promise.reject("rejected sorry!"),
])
  .then((prices) => {
    console.log(prices);
  })
  .catch((error) => {
    console.log("Dealer error: " + error);
  });

Promise.all([1, 2, "asdf"]).then((value) => console.log(value));

Promise.all([]).then((value) => console.log(value));
