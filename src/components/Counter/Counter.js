import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div className="counter-container">
          <button className="btn btn-danger" onClick={this.props.increment}>
            increment
          </button>
          <p>count: {this.props.count}</p>
          <button className="btn btn-danger" onClick={this.props.decrement}>
            decrement
          </button>
        </div>
      </div>
    );
  }
}
