"use strict";

let todos = getSavedTodos();
//delete dummy data
// read and parse the data when the app starts up
//stringy and write the data when the data is added

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.newTodo.value,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});

//create a checkbox and setup event listener-> hide completed
// create a new hideCompleted filter (default false)
// Update hideCompleted and rerender list on checkbox change
//setup renderTodos to remove completed items

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
