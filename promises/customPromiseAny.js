const promiseAny = (promiseArray) => {
  if (promiseArray instanceof Array === false || promiseArray.length === 0)
    return Promise.reject("rejected");
  let readPromises = 0;
  const errors = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((item, index) => {
      if (item instanceof Promise === false) item = Promise.resolve(item);
      item
        .then((value) => {
          readPromises++;
          return resolve(value);
        })
        .catch((error) => {
          readPromises++;
          errors[index] = error;
          if (readPromises === promiseArray.length)
            return reject(new AggregateError(errors, "All promises rejected"));
          return;
        });
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

const askFirstDealer = askDealer("3000", 3000);
const askSecondDealer = askDealer(200, 1000);
const askThirdDealer = askDealer(1000, 2000);

promiseAny([askFirstDealer, askSecondDealer, askThirdDealer]).then((value) =>
  console.log(value)
);
