setTimeout(() => console.log("Settimeout 1"), 0);
setTimeout(() => {
  console.log("Settimeout 2");
  process.nextTick(() => console.log("Next tick inside settimeout 2"));
}, 0);
setTimeout(() => console.log("Settimeout 3"), 0);

process.nextTick(() => console.log("Next tick 1"));
process.nextTick(() => {
  console.log("Next tick 2");
  process.nextTick(() => console.log("Next tick inside next tick 2"));
});
process.nextTick(() => console.log("Next tick 3"));

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
  console.log("Promise 2");
  process.nextTick(() => console.log("Next tick inside promise"));
});
Promise.resolve().then(() => console.log("Promise 3"));

/* 
    Next tick 1
    Next tick 2
    Next tick 3
    Next tick inside next tick 2
    Promise 1
    Promise 2
    Promise 3
    Next tick inside promise
    Settimeout 1
    Settimeout 2
    Next tick inside settimeout 2
    Settimeout 3
*/
