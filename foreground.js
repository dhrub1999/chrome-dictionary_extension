// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
const axios = require("axios");
const options = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
  headers: {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

console.log(process.env.RAPIDAPI_KEY);
console.log("Hello world");
