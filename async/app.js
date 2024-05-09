function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(52), 0);
  });
}

async function getNumber() {
  const result = await getSpecificNumber();
  console.log(result);
}

const promisedNumber = Promise.resolve(5);

getNumber();
promisedNumber.then((value) => console.log(value));
