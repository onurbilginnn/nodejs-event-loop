const printNumber1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Number 1 printed.");
      return resolve(1);
    }, 1000);
  });
};

const printNumber2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Number 2 printed.");
      return resolve(2);
    }, 1000);
  });
};

const printNumbersInSequential = async () => {
  const number1 = await printNumber1();
  const number2 = await printNumber2();
  console.log("Sequential", number1, number2);
};

const printNumbersInParallel = async () => {
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  const [number1, number2] = [await promise1, await promise2];
  console.log("Parallel", number1, number2);
};

// printNumbersInSequential();
printNumbersInParallel();
