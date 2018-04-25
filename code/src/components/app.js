import React from "react"
import Header from "./header/header"
import ChooseTask from "./ChooseTask"
import Form from "./form/form"
import List from "./list"
import ListFin from "./listFin"
import Pineapple from "./Pineapple"
import "./app.css"

class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      { value: "Plant a tree", done: false },
    ]
  }

  handleSubmit = event => {
    event.preventDefault()
    const newTodo = {
      value: this.state.inputValue,
      done: false
    }
    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({ todos, inputValue: ""})
  }

  handleAddTask = task => {
    const addTask = {
      value: task,
      done: false
    }
    const todos = this.state.todos
    todos.push(addTask)
    this.setState({ todos })
  }

  handleRemoveTask = taskValue => {
    const todos = this.state.todos
    todos.forEach((task, index) => {
      if (task.value == taskValue) {
        todos.splice(index, 1)
      }
    })
    this.setState({ todos })
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  handleClick = index => {
    const todos = this.state.todos
    todos[index].done = !todos[index].done
    this.setState({ todos })
  }

  render() {
    return (
      <div className="background-container">

        <div>
          <Header />
        </div>

        <div id="f1">
          <ChooseTask
            handleAddTask={this.handleAddTask}
            handleRemoveTask={this.handleRemoveTask} />
        </div>

        <div className="app-form-list-form">
          <div>
            <List
              todos={this.state.todos}
              handleClick={this.handleClick} />
          </div>
          <div className="app-form">
            <Form
              inputValue={this.state.inputValue}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
          </div>
        </div>

        <div>
          <ListFin
            todos={this.state.todos} />
        </div>
      </div>
    )
  }

}

export default App
