const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText);
    const breeds = Object.keys(response.message);
    const firstBreed = breeds[0];
    const xhr2 = new XMLHttpRequest();
    xhr2.open(
      "GET",
      "https://dog.ceo/api/breed/" + firstBreed + "/images/random"
    );
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr2.responseText);
        console.log(response);
      }
    };
    xhr2.send(null);
  }
};
xhr.send(null);
