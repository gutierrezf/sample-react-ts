import React from "react";
import { iTodo } from "./TodoForm";

export interface TodoProps {
  todo: iTodo;
  toggleComplete: () => void;
  onDelete: () => void;
}

export default (props: TodoProps) => (
  <div className="d-flex w-75 align-items-center justify-content-between py-1">
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button className="btn btn-danger" onClick={props.onDelete}>
      x
    </button>
  </div>
);
