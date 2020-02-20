import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
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
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          add todo
        </button>
      </form>
    );
  }
}
