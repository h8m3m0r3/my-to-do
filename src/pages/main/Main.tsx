import React from "react";
import { QRCode, Space } from "antd";
import "./Main.scss";
import { useToDoList } from "hooks";
import { FilterPanel, ToDoList } from "components";

const Main = () => {
  const {
    inputValue,
    onChangeInputValue,
    handleEnterPress,
    listFilter,
    handleCompleteTask,
    handleDeleteTask,
    handleChangeTaskFilter,
    handleDeleteCompletedTask,
  } = useToDoList();

  return (
    <div className="wrapper">
      <div className="title">todos</div>
      <div className="content">
        <input
          className="input"
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={handleEnterPress}
          type="text"
          placeholder="What needs to be done?"
        />
        <ToDoList
          listFilter={listFilter}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
        <FilterPanel
          handleChangeTaskFilter={handleChangeTaskFilter}
          listFilter={listFilter}
          handleDeleteCompletedTask={handleDeleteCompletedTask}
        />
      </div>
      <Space direction="vertical" align="center">
        <QRCode value={"t.me/h8m3m0r3" || "-"} />
      </Space>
    </div>
  );
};

export { Main };
