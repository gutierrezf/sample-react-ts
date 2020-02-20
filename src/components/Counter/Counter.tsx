import React from "react";
import "./Counter.css";

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

const Counter = (props: CounterProps) => {
  return (
    <div>
      <h1>Counter</h1>
      <div className="counter-container">
        <button className="btn btn-danger" onClick={props.increment}>
          increment
        </button>
        <p>count: {props.count}</p>
        <button className="btn btn-danger" onClick={props.decrement}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
