const promise1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("promise1"), 1000);
  });
};

const promise2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("promise2"), 3000);
  });
};

// (async function () {
//   console.log("Parallel run of asyncs");
//   const prom1 = promise1();
//   const prom2 = promise2();
//   const [firstTask, secondTask] = [await prom1, await prom2];
//   console.log(firstTask, secondTask);
// })();

(async function () {
  console.log("Seq run of asyncs");
  const firstTask = await promise1();
  const secondTask = await promise2();
  console.log(firstTask);
  console.log(secondTask);
})();
