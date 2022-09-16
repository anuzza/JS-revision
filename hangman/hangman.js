const Hangman = function (word, noGuess, status) {
  this.word = word.toLowerCase().split("");
  this.noGuess = noGuess;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getStatus = function () {
  const isFinished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter);
  });

  // const lettersUnguessed = this.word.filter((letter) => {
  //   return !this.guessedLetters.includes(letter);
  // });

  // const isFinished = lettersUnguessed.length === 0;
  // let isFinished;
  // this.word.forEach((letter) => {
  //   if (this.guessedLetters.includes(letter)) {
  //     isFinished = true;
  //   } else {
  //     isFinished = false;
  //   }
  // });

  if (this.noGuess <= 0) {
    this.status = "failed";
  } else if (isFinished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hangman.prototype.getStatusMsg = function () {
  if (this.status === "playing") {
    return `Guesses left: ${this.noGuess}`;
  } else if (this.status === "failed") {
    return `Nice try, the word was "${this.word.join("")}"`;
  } else {
    return `You guessed the word!!`;
  }
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

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);
  if (this.status !== "playing") {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.noGuess--;
  }
  this.getStatus();
};
