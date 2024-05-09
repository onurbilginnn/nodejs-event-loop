const getRandomDog = async () => {
  const fetchedDog = await fetch("https://dog.ceo/api/breeds/image/random");
  return await fetchedDog.json();
};

const dog = await getRandomDog();
console.log(dog);
