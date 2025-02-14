// Libraries
import React, { Component } from "react";

// Components
import Todo from "./components/Todo";

// Stylesheets
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleClick(){
    this.setState({list: [...this.state.list, this.state.input]})
  }

  render() {
    return (
      <div>
        <input placeholder="Add a task..." onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  }
}

export default App;
