let counter = 0;
const input = document.querySelector(".todo__input_text");
const buttonAdd = document.querySelector(".todo__input_button");
const listItem = document.querySelector(".todo__list");
buttonAdd.addEventListener("click", addTodo);

const main = new TodoBinding(listItem);

function addTodo(event) {
  event.preventDefault();
  if (input.value.length > 0) {
    const todo = { id: counter++, title: input.value };
    console.log(main);
    main.addTodo(todo);
  }
}

function removeElem() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) =>
    button.addEventListener("click", () => main.removeTodo(button.parentNode))
  );
}
