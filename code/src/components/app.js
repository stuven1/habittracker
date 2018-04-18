import React from "react"
import "./app.css"

import Form from "./form"
import List from "./list"
import FinishedTasks from "./finishedtasks"

class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      { value: "Clean kitchen", done: false },
      { value: "tidy toilet", done: true }
    ],
    finishedTasks: [
      { value: "sleep", done: true }
    ]
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      value: this.state.inputValue,
      done: false
    }
    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({ todos, inputValue: ""})
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

// when you click done-button, it changes initial state to checked and changes state on item in the array
  handleClick = (index) => {
    const todos = this.state.todos
    todos[index].done = !todos[index].done
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <Form
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />

        <List
        todos={this.state.todos}
        handleClick={this.handleClick}/>

      </div>
    )
  }

}

export default App
