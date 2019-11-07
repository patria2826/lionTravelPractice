import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./store";
import thunk from "redux-thunk";
import App from "./components/App";

const storage = createStore(store, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById("root")
);
