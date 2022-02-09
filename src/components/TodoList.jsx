import React, { useState } from "react";
import ActionButton from "./ActionButton";
import Task from "./Task";

function TodoList({ list, setList }) {
  const [totalTasksToDisplay, setTotalTasksToDisplay] = useState(3);
  const itemList = [];
  for (let i = 0; i < totalTasksToDisplay; i++) {
    if (list[i]) {
      itemList.push(list[i]);
    }
  }
  return (
    <>
      {list.length > 0 ? (
        <>
          {itemList.map(({ task, description, key, isComplete }, i) => {
            return (
              <div key={i} className={"task"}>
                <Task
                  className={isComplete ? "todo-complete" : ""}
                  setList={setList}
                  task={task}
                  description={description}
                  list={list}
                  i={i}
                  key={key}
                />
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h3>Waiting for new task...</h3>
        </>
      )}
      {list.length > totalTasksToDisplay ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.25rem",
            }}
          >
            <ActionButton
              className="button secondary"
              text={"Load more"}
              color={"gray"}
              onClick={() => setTotalTasksToDisplay(totalTasksToDisplay + 3)}
            />
            <ActionButton
              className="button secondary"
              text={"Show less"}
              color={"gray"}
              onClick={() => {
                console.log(totalTasksToDisplay < 3);
                totalTasksToDisplay < 6
                  ? (setTotalTasksToDisplay(3), alert(`Sorry, it didn't work`))
                  : setTotalTasksToDisplay(totalTasksToDisplay - 3);
              }}
            />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.25rem",
          }}
        >
          <ActionButton
            className="button secondary"
            text={"Show less"}
            color={"gray"}
            onClick={() => {
              console.log(totalTasksToDisplay < 3);
              totalTasksToDisplay < 6
                ? (setTotalTasksToDisplay(3), alert(`Sorry, it didn't work`))
                : setTotalTasksToDisplay(totalTasksToDisplay - 3);
            }}
          />
        </div>
      )}
    </>
  );
}

export default TodoList;
