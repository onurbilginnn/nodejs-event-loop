const myPromise = new Promise((res, reject) => {
  res("resolved");
});

// const myPromise2 = new Promise((res, reject) => {
//   res("value");
//   res("value2");
//   reject("rejected");
// });

// const myPromise3 = new Promise((res, reject) => {
//   reject("rejected");
//   res("value");
//   res("value2");
// });

myPromise.then((value) => console.log(value));
