import React from "react"
import Header from "./header/header"
import ChooseTask from "./ChooseTask"
import Form from "./form/form"
import List from "./list"
import ListFin from "./listFin"
import "./app.css"

class App extends React.Component {

  constructor(props) {
    super (props)
    const fromStorage = JSON.parse(localStorage.getItem("userList"))
    const todos = fromStorage ? fromStorage : [{ value: "Plant a tree", done: false, id: Date.now() }]
    this.state = {
      inputValue: "",
      todos
    }
  }

  componentDidUpdate() {
    localStorage.setItem("userList", JSON.stringify(this.state.todos))
  }

  handleSubmit = event => {
    event.preventDefault()
    const newTodo = {
      value: this.state.inputValue,
      done: false,
      id: Date.now()
    }

    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({ todos, inputValue: ""})
  }

  handleAddTask = task => {
    const addTask = {
      value: task,
      done: false,
      id: Date.now()
    }
    const todos = this.state.todos
    todos.push(addTask)
    this.setState({ todos })
  }

  handleRemoveTask = id => {
    const todos = this.state.todos
    todos.forEach((task, index) => {
      if (task.id == id) {
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

        <div id="f2" />

        <div className="app-form-list-form">
          <div>
            <List
              todos={this.state.todos}
              handleClick={this.handleClick}
              handleRemoveTask={this.handleRemoveTask} />
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