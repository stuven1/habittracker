import React from "react"
import "./app.css"

import Form from "./form"
import List from "./list"
import TaskFin from "./taskFin"

class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      { value: "Clean kitchen", done: false, date: [] },
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

    // Skapar nytt objekt och pushar in i ny array
    const newFinishedTask = {
      value: todos[index].value,
      done: true
    }
    console.log(newFinishedTask)
    const copyOfFinishedTasks = this.state.finishedTasks
    copyOfFinishedTasks.push(newFinishedTask)
    this.setState({ finishedTasks: copyOfFinishedTasks })
  }

  render() {
    return (
      <div className="background-container">
        <div>
          <p>- All calls are in Component App -</p>
        </div>

        <div>
          <p>- Calls for Component Form -</p>
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        </div>

        <div>
          <p>- Calls for Component List -</p>
          <List
          todos={this.state.todos}
          handleClick={this.handleClick}/>
        </div>

        <div>
          <p>- Calls for Component FinishedTasks -</p>
          <TaskFin finishedTasks={this.state.finishedTasks}/>
        </div>
      </div>
    )
  }

}

export default App
