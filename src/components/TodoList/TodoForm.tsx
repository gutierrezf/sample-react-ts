import React from "react";
import shortid from "shortid";

export interface iTodo {
  id: string;
  text: string;
  complete: boolean;
}

interface TodoFormState {
  text: string;
}

export interface TodoFormProps {
  onSubmit: (todo: iTodo) => void;
}

export default class TodoForm extends React.Component<
  TodoFormProps,
  TodoFormState
> {
  state: TodoFormState = {
    text: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form
        className="d-flex w-50 align-items-center justify-content-center m-auto"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control w-75 mr-2"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button className="btn btn-primary">add todo</button>
      </form>
    );
  }
}
