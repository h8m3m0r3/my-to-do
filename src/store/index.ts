import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const store = configureStore({
    reducer: rootReducer 
});

export { store };

export type AppStore = typeof store;
export type AppDispatch =  AppStore["dispatch"]