import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoListType } from "types";

type addToDoActionType = {
  id: number;
  text: string;
  active: boolean;
};

const initialState: ToDoListType[] = [];
const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<addToDoActionType>) => {
      const { id, text, active } = action.payload;
      state.push({ id: id, text: text, active: active });
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state = state.filter((item) => item.id !== idToRemove);
      return state;
    },
    сompleteTask: (state, action: PayloadAction<number>) => {
      const idToToggle = action.payload;
      state = state.map((item) =>
        item.id === idToToggle ? { ...item, active: !item.active } : item
      );
      return state;
    },
    removeCompletedTask: (state) => {
      state = state.filter((item) => item.active !== false);
      return state;
    },
  },
});

export const { addTask, removeTask, removeCompletedTask, сompleteTask } =
  toDoListSlice.actions;
export { toDoListSlice };
