import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <h1>Todos</h1>
        <TodoForm onSubmit={this.addTodo} />
        <div className="btn-group my-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.updateTodoToShow("all")}
          >
            all
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.updateTodoToShow("active")}
          >
            active
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.updateTodoToShow("complete")}
          >
            complete
          </button>
        </div>

        <div
          className="w-50 m-auto align-items-center flex-column d-flex justify-content-center"
          style={{ background: "#dedede" }}
        >
          {todos.map(todo => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </div>
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
      </div>
    );
  }
}
