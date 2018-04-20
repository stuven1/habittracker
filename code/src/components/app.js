import React from "react"
import Header from "./header/header"
import Form from "./form/form"
import List from "./list"
import ListFin from "./listFin"
import "./app.css"
import ChooseTask from "./choosetasks"

class App extends React.Component {
	state = {
	  inputValue: "",
	  todos: [
	    { value: "Clean kitchen", done: false, date: [] },
	    { value: "tidy toilet", done: true }
	  ],
	  finishedTasks: [{ value: "sleep", done: true }]
	}

	handleSubmit = event => {
	  event.preventDefault()
	  const newTodo = {
	    value: this.state.inputValue,
	    done: false
	  }
	  const todos = this.state.todos
	  todos.push(newTodo)
	  this.setState({ todos, inputValue: "" })
	}

	handleChange = event => {
	  this.setState({ inputValue: event.target.value })
	}

	// when you click done-button, it changes initial state to checked and changes state on item in the array
	handleClick = index => {
	  const todos = this.state.todos
	  todos[index].done = !todos[index].done
	  this.setState({ todos })

	  // Skapar nytt objekt och pushar in i ny array
	  const newFinishedTask = {
	    value: todos[index].value,
	    done: true
	  }
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
	      <Header />

	      <div>
	        <p>- Calls for Component Form -</p>
	        <Form
  inputValue={this.state.inputValue}
	          handleChange={this.handleChange}
	          handleSubmit={this.handleSubmit} />
	      </div>

	      <div>
	        <p>- Calls for Component List -</p>
	        <List todos={this.state.todos} handleClick={this.handleClick} />
	      </div>

	      <div>
	        <p>- Calls for Component FinishedTasks -</p>
	        <ListFin finishedTasks={this.state.finishedTasks} />
	      </div>

	      <div>
	        <p>-Test Tasks</p>
	        <ChooseTask />
	      </div>
	    </div>
	  )
	}
}

export default App
