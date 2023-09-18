import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { useTypeSelector } from "hooks";

import "./ToDoList.scss";

interface IToDoList {
  listFilter: string;
  handleCompleteTask: (number: number) => void;
  handleDeleteTask: (number: number) => void;
}

const ToDoList = ({
  listFilter,
  handleCompleteTask,
  handleDeleteTask,
}: IToDoList) => {
  const toDoListStore = useTypeSelector((data) => data.toDoListReducer);
  return (
    <div className="listItem">
      {listFilter === "all"
        ? toDoListStore.map((item) => {
            return (
              <div
                className={`${
                  item.active ? "toDoListItem" : "toDoListItemCompleted"
                }`}
                key={item.id}
              >
                {item.active ? (
                  <button
                    onClick={() => handleCompleteTask(item.id)}
                    className="completeTaskButton"
                  ></button>
                ) : (
                  <button className="completedTaskButton">
                    <CheckOutlined />
                  </button>
                )}
                <p>{item.text}</p>
                <button
                  onClick={() => handleDeleteTask(item.id)}
                  className="deleteTaskButton"
                >
                  -
                </button>
              </div>
            );
          })
        : null}
      {listFilter === "active"
        ? toDoListStore
            .filter((item) => item.active)
            .map((item) => {
              return (
                <div className="toDoListItem" key={item.id}>
                  <button
                    onClick={() => handleCompleteTask(item.id)}
                    className="completeTaskButton"
                  ></button>
                  <p>{item.text}</p>
                  <button
                    onClick={() => handleDeleteTask(item.id)}
                    className="deleteTaskButton"
                  >
                    -
                  </button>
                </div>
              );
            })
        : null}
      {listFilter === "completed"
        ? toDoListStore
            .filter((item) => !item.active)
            .map((item) => {
              return (
                <div className="toDoListItemCompleted" key={item.id}>
                  <button className="completedTaskButton">
                    <CheckOutlined />
                  </button>
                  <p>{item.text}</p>
                  <button
                    onClick={() => handleDeleteTask(item.id)}
                    className="deleteTaskButton"
                  >
                    -
                  </button>
                </div>
              );
            })
        : null}
    </div>
  );
};

export { ToDoList };
