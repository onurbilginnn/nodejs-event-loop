const promiseAll = (array) => {
  if (!(array instanceof Array) || array.length === 0)
    return Promise.resolve([]);
  const result = [];
  let resolvedPromises = 0;
  return new Promise((resolve, reject) => {
    array.forEach((item, index) => {
      if (!(item instanceof Promise)) item = Promise.resolve(item);
      item
        .then((value) => {
          resolvedPromises += 1;
          result[index] = value;
          if (resolvedPromises === array.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
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

function reject() {
  return new Promise((resolve, reject) => {
    reject("I reject everything!");
  });
}

const askFirstDealer = askDealer(8000, 1000);
const askSecondDealer = askDealer(2000, 2000);
const askThirdDealer = askDealer(10000, 3000);

promiseAll([askFirstDealer, askSecondDealer, askThirdDealer]).then((value) =>
  console.log(value)
);

promiseAll([]).then((value) => console.log(value));
promiseAll([1, "sdf", 33]).then((value) => console.log(value));
