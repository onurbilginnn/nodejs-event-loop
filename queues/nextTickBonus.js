process.nextTick(() => console.log("First next tick"));
process.nextTick(() => {
  console.log("Second next tick");
  process.nextTick(() =>
    console.log("Inner next tick inside second next tick")
  );
});
process.nextTick(() => console.log("3rd next tick"));

Promise.resolve().then(() => console.log("First promise"));
Promise.resolve().then(() => {
  console.log("Second promise");
  process.nextTick(() => console.log("Inner next tick inside second promise"));
});
Promise.resolve().then(() => console.log("3rd promise"));
