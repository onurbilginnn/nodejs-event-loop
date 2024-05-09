function logPromise() {
  return new Promise((resolve) => resolve("Promise console log"));
}

function logNextTick() {
  console.log("Next tick console log");
}

console.log("First console log");
logPromise().then((value) => console.log(value));
process.nextTick(logNextTick);
console.log("Second console log");
