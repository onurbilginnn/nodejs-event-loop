const promiseRace = (promiseArray) => {
  if (!(promiseArray instanceof Array) || promiseArray.length === 0)
    return new Promise([]);
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      if (promise instanceof Promise === false)
        promise = Promise.resolve(promise);
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => reject(new Error("There is an error: " + error)));
    });
  });
};

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
const askSecondDealer = askDealer("50", 1000);
const askThirdDealer = askDealer(1000, 2000);

promiseRace([askFirstDealer, askSecondDealer, askThirdDealer]).then((value) =>
  console.log(value)
);
