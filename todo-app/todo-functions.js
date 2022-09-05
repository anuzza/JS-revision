//Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todoJson = localStorage.getItem("todos");
  if (todoJson !== null) {
    return JSON.parse(todoJson);
  } else {
    return [];
  }
};

//Save todos to localStorage
//saveTodos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Get the DOM elements for an individual note
//generateTodoDOM
const generateTodoDOM = (todo) => {
  //Setup a root div
  const todop = document.createElement("div");

  //Setup and append a checkbox(sset type attribute)
  const chBox = document.createElement("input");

  chBox.setAttribute("type", "checkbox");
  //chBox.type = "checkbox";
  todop.appendChild(chBox);

  //Setup and append a span
  const textEL = document.createElement("span");
  textEL.textContent = todo.text;
  todop.appendChild(textEL);

  //Setup and append a button

  const button = document.createElement("button");
  button.textContent = "x";
  todop.appendChild(button);

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
