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

const filters = {
  searchText: "",
};

// const user = {
//   name: "anuja",
//   age: 19,
// };

// const userJson = JSON.stringify(user);
// console.log(userJson);
// localStorage.setItem("user", userJson);

//localStorage.setItem("location", "Mississippi");
// console.log(localStorage.getItem("location"));
// localStorage.removeItem("location");
//localStorage.clear();

const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};
renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "btn was clicked";
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});
