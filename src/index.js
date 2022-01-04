import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import TableReducer from "./reducer/TableReducer";
import userReducer from "./reducer/userReducer";

const reducer = combineReducers({
  user: userReducer,
  table: TableReducer,
  // user: user.reducer,
});

// const store = createStore(reducer);
// console.log("userReducer", userReducer);
const store = configureStore({ reducer });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
