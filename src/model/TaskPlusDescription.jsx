export class TaskPlusDescription {
  constructor(task, description) {
    this.key = Math.floor(Math.random() * 100) + 1;
    this.task = task;
    this.description = description;
    this.isComplete = false;
  }
}
