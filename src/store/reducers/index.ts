import { combineReducers } from "redux";
import { toDoListSlice } from "./toDoListReducer";

const rootReducer = combineReducers({
  toDoListReducer: toDoListSlice.reducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>
