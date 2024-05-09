const promiseAllSettled = (promiseArray) => {
  if (!(promiseArray instanceof Array) || promiseArray.length === 0)
    return new Promise([]);
  return new Promise((resolve, _) => {
    const resultArray = [];
    let settledPromiseCount = 0;
    promiseArray.forEach((promise, index) => {
      if (!(promise instanceof Promise)) promise = Promise.resolve(promise);
      promise
        .then((value) => {
          settledPromiseCount++;
          resultArray[index] = { status: "fulfilled", value };
          if (settledPromiseCount === promiseArray.length) resolve(resultArray);
        })
        .catch((reason) => {
          settledPromiseCount++;
          resultArray[index] = { status: "rejected", reason };
          if (settledPromiseCount === promiseArray.length) resolve(resultArray);
        });
    });
  });
};

function askDealer(deal, responseTime) {
  return new Promise((resolve, reject) => {
    if (typeof deal === "string")
      return setTimeout(() => reject(deal), responseTime);
    return setTimeout(() => resolve(deal), responseTime);
  });
}

const askFirstDealer = askDealer(3000, 4000);
const askSecondDealer = askDealer("Not a suitable car", 1000);
const askThirdDealer = askDealer(1000, 2000);

promiseAllSettled([askFirstDealer, askSecondDealer, askThirdDealer]).then(
  (value) => console.log(value)
);
