//Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todoJson = localStorage.getItem("todos");
  return todoJson ? JSON.parse(todoJson) : [];
  // if (todoJson !== null) {
  //   return JSON.parse(todoJson);
  // } else {
  //   return [];
  // }
};

//Save todos to localStorage
//saveTodos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
  //   todos = todos.filter((todo) => todo.id !== id);
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => {
    return todo.id === id;
  });
  if (todo) {
    todo.completed = !todo.completed;
  }
};

//Get the DOM elements for an individual note
//generateTodoDOM
const generateTodoDOM = (todo) => {
  //Setup a root div
  const todop = document.createElement("div");

  //Setup and append a checkbox(sset type attribute)
  const chBox = document.createElement("input");

  chBox.setAttribute("type", "checkbox");
  chBox.checked = todo.completed;

  todop.appendChild(chBox);
  chBox.addEventListener("change", (e) => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  //chBox.type = "checkbox";

  //Setup and append a span
  const textEL = document.createElement("span");
  textEL.textContent = todo.text;
  todop.appendChild(textEL);

  //Setup and append a button

  const button = document.createElement("button");
  button.textContent = "x";
  todop.appendChild(button);
  button.addEventListener("click", function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todop;
};

// get the DOM elements for list summary
//generateSummaryDOM
const generateSummaryDOM = (filteredTodos) => {
  const incomplete = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const leftTodo = document.createElement("h2");
  leftTodo.textContent = `You have ${incomplete.length} todos left`;
  return leftTodo;
};

//render application todos based on filters
//renderTodos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(filteredTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};
