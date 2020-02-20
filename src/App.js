import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}/>
        <TodoList />
      </div>
    );
  }
}

export default App;
