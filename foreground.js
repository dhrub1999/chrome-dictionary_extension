const wordMeaning = document.querySelector(".word-meaning");
const definitionText = document.querySelector(".definition-text");
const synonymsText = document.querySelector(".synonyms-text");
const partsOfSpeech = document.querySelector(".parts-of-speech");
const searchedWord = document.querySelector(".searched-word");

document.getElementById("search-form").addEventListener("submit", (e) => {
  const outputMsg = document.getElementById("msg");
  e.preventDefault();
  const inputVal = document.getElementById("search").value.trim();

  if (inputVal === "") {
    outputMsg.textContent = "Please enter a word";
    outputMsg.style.display = "block";
    outputMsg.style.color = "red";
    outputMsg.style.transform = "translateY(0)";
  } else if (/<[^>]*script[^>]*>/i.test(inputVal)) {
    outputMsg.textContent = "Please enter a valid word";
  } else {
    outputMsg.style.display = "none";
    fetchWordData(inputVal);
  }
});

const fetchWordData = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].meanings[0]);
    searchedWord.textContent = word;

    wordMeaning.innerHTML = data[0].meanings[0].definitions[0].definition;
  } catch (error) {
    console.log(error);
  }
};
