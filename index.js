let counter = 0;
const toDoList = [];

const input = document.querySelector(".todo__input_text");
const buttonAdd = document.querySelector(".todo__input_button");
const listItem = document.querySelector(".todo__list");
buttonAdd.addEventListener("click", addToDo);

function addToDo() {
  event.preventDefault();
  if (input.value !== "") {
    const toDo = new List(counter++, input.value, false);
    toDoList.push(toDo);
    listItem.append(toDo.createToDo(toDo.id, toDo.title));
    initialClick(toDo);
    checkToDo(toDo);
  } else return false;
}

function checkToDo(toDo) {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((elem) =>
    elem.addEventListener("click", ({ target }) => {
      toDo.completeToDo(target.parentNode, toDoList, toDo);
    })
  );
}

function initialClick(toDo) {
  const removeButtons = document.querySelectorAll(".btn");
  console.log(toDo);

  Array.from(removeButtons).forEach((button) => {
    console.log(button);
    button.addEventListener("click", (event) => {
      toDo.removeToDo(event.target, toDoList, toDo);
    });
  });
}
