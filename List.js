class List {
  constructor(id, title, complete) {
    this.id = id;
    this.title = title;
    this.complete = complete;
  }

  createToDo = (id, title) => {
    const li = document.createElement("li");
    li.classList.add("todo__item");
    li.setAttribute("id", `${id}`);
    li.innerHTML = `<input class="checkbox" type="checkbox" id=${id} />
    <label class="todo__text" for="">${title}</label>
    <button class="btn">
      <i class="fa fa-trash"></i>
    </button>`;
    return li;
  };

  completeToDo = (liElem, toDoList, toDo) => {
    liElem.classList.toggle("yellow");
  };

  removeToDo = (liElem, toDoList, toDo) => {
    const listLi = document.querySelectorAll("li");
    liElem.parentNode.remove();
    for (const li of toDoList) {
      console.log(`${JSON.stringify(li)} === ${JSON.stringify(toDo)}`);
      if (JSON.stringify(li) === JSON.stringify(toDo)) {
        toDoList.splice(toDoList.indexOf(JSON.stringify(toDo)), 1);
        console.log(toDoList);
      }
    }
  };
}
