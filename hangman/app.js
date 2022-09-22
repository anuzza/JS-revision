//HTTP (Hypertext Transfer Protocol)
//Request- What we want to do
//Response- What was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessEL = document.querySelector("#guesses");
let game1;

// puzzleEl.textContent = game1.getPuzzle();
// guessEL.textContent = game1.getStatusMsg();

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game1.getPuzzle();
  guessEL.textContent = game1.getStatusMsg();
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name.common);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
