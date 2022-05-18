class TodoBinding {
  constructor(element) {
    this.listElement = element;
    this.todoList = [];
  }

  static createTodoItem({ id, title }) {
    const li = document.createElement("li");
    li.classList.add("todo__item");
    li.setAttribute("id", id);
    li.insertAdjacentHTML(
      "afterbegin",
      `<input class="checkbox" type="checkbox" />
          <label class="todo__text" for="">${title}</label>
          <button class="btn">
            <i class="fa fa-trash"></i>
          </button>`
    );

    return li;
  }

  update() {
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    for (const todo of this.todoList) {
      this.listElement.appendChild(TodoBinding.createTodoItem(todo));
    }
    removeElem();
  }

  addTodo(todo) {
    this.todoList.push(todo);
    this.update();
  }

  removeTodo(todo) {
    const index = this.todoList.findIndex((elem) => {
      console.log(elem);
      return elem.id === +todo.getAttribute("id");
    });

    this.todoList.splice(index, 1);
    this.update();
  }
}
