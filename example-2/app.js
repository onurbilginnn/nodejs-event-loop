function f(cb) {
  setTimeout(() => cb(), 0);
}

f(() => console.log("This is a callback"));

console.log("Hello World!");
