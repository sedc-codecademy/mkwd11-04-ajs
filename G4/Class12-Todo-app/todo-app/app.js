console.log("works");
// import files must end with .js
import { Todo } from "./src/todo.model.js";

console.log(Todo);

const app = () => {
  // Data variables
  let todos = [
    new Todo("Read a fictional novel", "low"),
    new Todo("Workout", "medium"),
    new Todo("Teach Code", "high"),
  ];
  let editTodoId = null;
  //   Selectors
  const todoListEl = document.querySelector(".todo-list");
  const todoFormEl = document.querySelector(".todo-form");
  const todoTextInput = document.querySelector("#todoText");
  const todoPriorityInput = document.querySelector("#todoPriority");
  const submitBtn = document.querySelector("#submitBtn");

  //   Creating a todo
  const createTodo = (todoText, todoPriority) => {
    return new Todo(todoText, todoPriority);
  };

  const onEditTodo = todo => {
    editTodoId = todo.id;
    todoTextInput.value = todo.text;
    todoPriorityInput.value = todo.priority;
    submitBtn.textContent = "Update";
  };

  //   Adding event listener to todo
  const addTodoEventListener = (todo, todoEl) => {
    todoEl.addEventListener("click", event => {
      if (event.target.id.includes("finish")) {
        todo.finishTodo();
        renderTodoList(todos);
      }

      if (event.target.id.includes("delete")) {
        todos = todos.filter(existingTodo => existingTodo.id !== todo.id);
        renderTodoList(todos);
      }

      if (event.target.id.includes("edit")) {
        onEditTodo(todo);
      }
    });
  };

  //   Rendering todos function
  const renderTodoList = todos => {
    todoListEl.innerHTML = "";

    todos.forEach(todo => {
      const todoEl = document.createElement("LI");
      // Adding dynamic classes to elements
      console.log(todo.priority);
      todoEl.classList.add("todo", todo.priority);
      if (todo.isFinished) todoEl.classList.add("finished");

      todoEl.innerHTML = `
            <span class="todo-priority">
                <strong>${todo.priority[0].toUpperCase()}</strong> ${todo.text}
            </span>
            <span>
                <button id="edit-${todo.id}">Edit</button>
                <button 
                id="${todo.isFinished ? "delete" : "finish"}-${todo.id}">
                ${todo.isFinished ? "Delete" : "Finish"}
                </button>
            </span>
        `;

      addTodoEventListener(todo, todoEl);

      todoListEl.appendChild(todoEl);
    });
  };

  todoFormEl.addEventListener("submit", e => {
    e.preventDefault();
    // getting values from inputs
    const todoText = todoTextInput.value;
    const todoPriority = todoPriorityInput.value;

    // If no edit id then we are going to add on submit
    if (!editTodoId) {
      // creating a new todo object
      const newTodo = createTodo(todoText, todoPriority);

      // using push
      todos.push(newTodo);
      // using spread
      // todos = [...todos, newTodo];
    }

    // If we have edit it then we are going to update the todo
    if (editTodoId) {
      todos.forEach(todo => {
        if (todo.id === editTodoId) todo.updateTodo(todoText, todoPriority);
      });
      editTodoId = null;
      submitBtn.textContent = "Add";
    }

    renderTodoList(todos);
    todoFormEl.reset();
  });

  renderTodoList(todos);
};

// Will be updated to IIFE at the end
app();
