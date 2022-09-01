const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const filteredNotes = notes.filter((note, index) => {
  const isTitleMatch = note.title.toLowerCase().includes("ne");
  const isbodyMatch = note.body.toLowerCase().includes("ne");
  return isTitleMatch || isbodyMatch;
});

// console.log(filteredNotes);

// const note = findNote(notes, "office modification");
// console.log(note);

sortNotes(notes);
console.log(notes);
