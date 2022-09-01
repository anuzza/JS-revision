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

const deleteTodo = (todos, text) => {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === text.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const sortTodos = (todos) => {
  todos.sort((a, b) => {
    if (a.completed > b.completed) {
      return 1;
    } else if (a.completed < b.completed) {
      return -1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
// deleteTodo(todos, "buy food");
// console.log(todos);

// const leftTodo = todos.filter((todo) => todo.completed === false);
// console.log(leftTodo);
