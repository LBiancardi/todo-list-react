import { useState, useEffect } from "react";
import ActionButton from "../components/ActionButton";
import Inputs from "../components/Inputs";
import { TaskPlusDescription } from "../model/TaskPlusDescription";
import TodoList from "../components/TodoList";

export function List() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  // useEffect(() => {}, [listOfTasks]);

  function addTask(listOfTasks, task, description) {
    const newTask = new TaskPlusDescription(task, description);
    setListOfTasks([...listOfTasks, newTask]);
    setTask("");
    setDescription("");
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          if (task) {
            e.preventDefault();
            addTask(listOfTasks, task.trim(), description.trim());
          } else {
            e.preventDefault();
            alert("Task value can't be empty.");
          }
        }}
        className={"todo-form"}
      >
        <div className="todo-input">
          <Inputs
            className={"text-field"}
            field={task}
            setField={setTask}
            title={"Task"}
            placeholder={"New Task..."}
          />
          <Inputs
            className={"text-field"}
            field={description}
            setField={setDescription}
            title={"Description"}
            placeholder={"Description..."}
          />
        </div>
        <ActionButton
          className={"button primary"}
          color={"orange"}
          text={"Add Todo"}
        />
      </form>
      <div className="todo-list">
        <h1 style={{ margin: "1rem auto" }}>My Todo's</h1>
        <TodoList list={listOfTasks} setList={setListOfTasks} />
      </div>
    </>
  );
}
