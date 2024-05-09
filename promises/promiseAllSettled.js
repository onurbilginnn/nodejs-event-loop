function askDealer(deal, responseTime) {
  return new Promise((resolve, reject) => {
    if (typeof deal === "string")
      return setTimeout(() => reject(deal), responseTime);
    return setTimeout(() => resolve(deal), responseTime);
  });
}

const askFirstDealer = askDealer(3000, 6000);
const askSecondDealer = askDealer("Not a suitable car", 2000);
const askThirdDealer = askDealer(1000, 8000);

Promise.allSettled([askFirstDealer, askSecondDealer, askThirdDealer]).then(
  (value) => console.log(value)
);
