const Hangman = function (word, noGuess) {
  this.word = word.toLowerCase().split("");
  this.noGuess = noGuess;
  this.guessedLetters = ["c"];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter == " ") {
      puzzle += letter;
    } else {
      puzzle = puzzle + `*`;
    }
  });

  return puzzle;
};

const game1 = new Hangman("Cat", 2);
console.log(game1.getPuzzle());

const game2 = new Hangman("New Jersey", 6);
console.log(game2.getPuzzle());
