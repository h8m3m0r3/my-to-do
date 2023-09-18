import { useTypeDispatch } from "hooks/usetypedispatch/useTypeDispatch";
import { useState } from "react";
import {
  addTask,
  removeCompletedTask,
  removeTask,
  сompleteTask,
} from "store/reducers/toDoListReducer";
import { ToDoListType } from "types";

interface IUseToDoList {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  listFilter: string;
  setListFilter: React.Dispatch<React.SetStateAction<string>>;
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleDeleteTask: (id: number) => void;
  handleCompleteTask: (id: number) => void;
  handleDeleteCompletedTask: () => void;
  handleChangeTaskFilter: (item: string) => void;
}

const useToDoList = (): IUseToDoList => {
  const [inputValue, setInputValue] = useState("");
  const [listFilter, setListFilter] = useState("all");
  const dispatch = useTypeDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        const randomId = Math.floor(Math.random() * 10000);
        dispatch(addTask({ id: randomId, text: inputValue, active: true }));
        setInputValue("");
      }
    }
  };
  // Удаление таска
  const handleDeleteTask = (id: number) => {
    dispatch(removeTask(id));
  };
  // Завершение таска
  const handleCompleteTask = (id: number) => {
    dispatch(сompleteTask(id));
  };
  // Удаление всех
  const handleDeleteCompletedTask = () => {
    dispatch(removeCompletedTask());
  };
  // Фильтр
  const handleChangeTaskFilter = (item: string) => {
    setListFilter(item);
  };
  return {
    inputValue,
    setInputValue,
    listFilter,
    setListFilter,
    onChangeInputValue,
    handleEnterPress,
    handleDeleteTask,
    handleCompleteTask,
    handleDeleteCompletedTask,
    handleChangeTaskFilter,
  };
};
export { useToDoList };
