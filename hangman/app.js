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

getPuzzle("2").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (err) => {
    console.log(`error: ${err}`);
  }
);

getCountry("MX").then(
  (country) => {
    console.log(country.name.common);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
