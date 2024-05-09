function capitalize(text) {
  return text[0].toUpperCase() + text.substr(1);
}

function capitalize(text) {
  return new Promise((res, reject) => {
    if (typeof text !== "string")
      return reject(new Error("Argument must be a string"));
    return res(text[0].toUpperCase() + text.substr(1));
  });
}
capitalize("naber lo").then((value) => console.log(value));
