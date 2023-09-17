import React from "react";
import { ToDoListType } from "types";

interface IFilterPanel {
  toDoList: ToDoListType[] | [];
  handleChangeTaskFilter: (item: string) => void;
  listFilter: string;
  handleDeleteCompletedTask: () => void;
}

const FilterPanel = ({
  toDoList,
  handleChangeTaskFilter,
  listFilter,
  handleDeleteCompletedTask,
}: IFilterPanel) => {
  return (
    <div className="content__down">
      <div className="filter__left">
        {toDoList.filter((item) => item.active).length} items left
      </div>
      <div className="filter__sort">
        <button
          onClick={() => handleChangeTaskFilter("all")}
          disabled={listFilter === "all"}
        >
          All
        </button>
        <button
          onClick={() => handleChangeTaskFilter("active")}
          disabled={listFilter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => handleChangeTaskFilter("completed")}
          disabled={listFilter === "completed"}
        >
          Completed
        </button>
      </div>
      <button className="filter__delete" onClick={handleDeleteCompletedTask}>
        Clear completed
      </button>
    </div>
  );
};

export { FilterPanel };