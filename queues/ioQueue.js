const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("read file 1");
});
setTimeout(() => console.log("Set timeout 1"), 0);
process.nextTick(() => console.log("Next tick 1"));
Promise.resolve().then(() => console.log("Promise 1"));

/* 
    Next tick 1
    Promise 1
    Set timeout 1
    read file 1
*/
