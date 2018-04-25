import React from "react"
import Header from "./header/header"
import ChooseTask from "./ChooseTask"
import Form from "./form/form"
import List from "./list"
import ListFin from "./listFin"
import Gratification from "./Gratification"
import "./app.css"

class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      { value: "Clean the kitchen", done: false },
      { value: "Tidy the toilet", done: true },
      { value: "Plant a tree", done: false },
      { value: "Die", done: false },
      { value: "Bike to work", done: true }
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

        <div>
          <ChooseTask
            handleAddTask={this.handleAddTask} />
        </div>

        <div>
          <Form
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </div>

        <div>
          <List
            todos={this.state.todos}
            handleClick={this.handleClick} />
        </div>

        <div>
          <ListFin todos={this.state.todos} />
        </div>

        <div>
          <Gratification />
        </div>

      </div>
    )
  }

}

export default App
