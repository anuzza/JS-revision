//HTTP (Hypertext Transfer Protocol)
//Request- What we want to do
//Response- What was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessEL = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.getPuzzle();
guessEL.textContent = game1.getStatusMsg();

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessEL.textContent = game1.getStatusMsg();
});

//Making an HTTP request
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("error");
  }
});
request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3");
request.send();

const countryCode = "US";

const req = new XMLHttpRequest();
req.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find((count) => count.cca2 === countryCode);
    console.log(country.name.common);
  } else if (e.target.readyState === 4) {
    console.log("unable to fetch data");
  }
});

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
