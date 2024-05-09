const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/.env") });

const apiKey = process.env.OMDB_API_KEY;
fetch(`http://www.omdbapi.com/?s=batman&y=2018&apikey=${apiKey}`)
  .then((result) => result.json())
  .then((data) => console.log(data));
