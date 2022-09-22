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

getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });

// getCountry("MX").then(
//   (country) => {
//     console.log(country.name.common);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );

// fetch("https://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("unable to fetch the puzzle");
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
