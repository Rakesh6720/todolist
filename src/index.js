import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./index.css";

var destination = document.querySelector("#container");
// call ReactDOM from index of app
ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);
