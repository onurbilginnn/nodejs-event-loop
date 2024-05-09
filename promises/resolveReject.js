function logToConsole(somePromise) {
  somePromise.then((value) => console.log(value));
}

const aPromise = new Promise((resolve, reject) => resolve("Hello"));

logToConsole(aPromise);

const promisifiedValue = Promise.resolve("value");

logToConsole(promisifiedValue);

const rejectedValue = Promise.reject(new Error("Error"));

logToConsole(rejectedValue);
