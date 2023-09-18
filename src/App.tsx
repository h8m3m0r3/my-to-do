import { Main } from "pages";
import {Provider} from "react-redux"
import React from "react";
import { store } from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export { App };
