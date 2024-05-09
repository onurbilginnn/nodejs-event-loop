async function getWrongData() {
  try {
    const data = await fetch("https://some-wrong-host.com/wrong-data");
    return data;
  } catch (error) {
    console.log("There is an error: " + error);
  }
}

(async function () {
  const result = await getWrongData();
  console.log(result);
})();
