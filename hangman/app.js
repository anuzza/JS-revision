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

// getCountry('US')
//   .then((country) => {
//     console.log(country.name.common);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

getLocation()
  .then((location) => {
    return getCountry(location.country);
  })
  .then((country) => {
    console.log(country.name.common);
  })
  .catch((err) => {
    console.log(err);
  });
