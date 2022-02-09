import React from "react";
import { MdDoneOutline } from "react-icons/md";
import ActionButton from "./ActionButton";

function Task({ task, description, list, i, setList, className }) {
  function handleDelete(list, i) {
    const newList = list.filter((task) => task.key != i);
    return setList(newList);
  }

  function handleCompleteTask(list, idx) {
    const newList = list.map((task, i) => {
      if (i === idx) {
        !task.isComplete ? (task.isComplete = true) : (task.isComplete = false);
      }
      return task;
    });
    return setList(newList);
  }

  return (
    <>
      <div>
        <h3 className={className} style={{ marginTop: "0" }}>
          {task}
        </h3>
        <span className={className}>{description}</span>
      </div>
      <div className="secondary-btns-div">
        <ActionButton
          className={"button secondary"}
          color={"darkgreen"}
          text={<MdDoneOutline />}
          onClick={() => {
            handleCompleteTask(list, i);
          }}
        />
        <ActionButton
          className={"button secondary"}
          messageId={list[i].key}
          color={"darkred"}
          onClick={(e) => {
            const removeThisMessage = e.target.id;
            handleDelete(list, removeThisMessage);
          }}
          text={"Delete"}
        />
      </div>
    </>
  );
}

export default Task;
