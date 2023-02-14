export class Todo {
  constructor(text, priority) {
    this.id = String(Math.random());
    this.text = text;
    this.priority = priority;
    this.isFinished = false;
  }

  finishTodo() {
    this.isFinished = true;
  }

  updateTodo(text, priority) {
    this.priority = priority;
    this.text = text.length > 4 ? text : this.text;
  }
}
