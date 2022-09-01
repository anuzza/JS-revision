const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean Kitchen",
    completed: false,
  },
  {
    text: "buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: true,
  },
  {
    text: "exercise",
    completed: false,
  },
];
//setup a contain for  todos
// setup fitlers (searchText) and wire up a new filter input to change it
// create a renderTodos function to render and rerender the latest filtered data

//you have 2 todos left (p element)
//add a p for each todo above (use text value)

const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incomplete = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const leftTodo = document.createElement("h2");
  leftTodo.textContent = `You have ${incomplete.length} todos left`;
  document.querySelector("#todos").appendChild(leftTodo);

  filteredTodos.forEach((todo) => {
    const todop = document.createElement("p");
    todop.textContent = todo.text;
    document.querySelector("#todos").appendChild(todop);
  });
};
renderTodos(todos, filters);

document.querySelector("#search").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({ text: e.target.elements.newTodo.value, completed: false });
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
