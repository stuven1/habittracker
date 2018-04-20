import React from "react"
import Header from "./header/Header"
import Form from "./form/form"
import List from "./List"
import ListFin from "./ListFin"
import "./app.css"
import ChooseTasks from "./choosetasks"

class App extends React.Component {
	state = {
	  inputValue: "",
	  todos: [
	    { value: "Clean kitchen", done: false, date: [] },
	    { value: "tidy toilet", done: true }
	  ],
	  finishedTasks: [{ value: "sleep", done: true }]
	}

<<<<<<< HEAD
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
	handleChooseTask = test => {
	  console.log(test)
	}
=======
  state = {
    inputValue: "",
    todos: [
      { value: "Clean the kitchen", done: false },
      { value: "Tidy the toilet", done: true },
      { value: "Plant a tree", done: false},
      { value: "Die", done: false},
      { value: "Bike to work", done: true}
    ]
  }
>>>>>>> d5584fbcb9b09303f34715677a8937894c726b8e

	handleChange = event => {
	  this.setState({ inputValue: event.target.value })
	}

	// when you click done-button, it changes initial state to checked and changes state on item in the array
	handleClick = index => {
	  const todos = this.state.todos
	  todos[index].done = !todos[index].done
	  this.setState({ todos })

<<<<<<< HEAD
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
=======
  handleClick = (index) => {
    const todos = this.state.todos
    todos[index].done = !todos[index].done
    this.setState({ todos })
  }
>>>>>>> d5584fbcb9b09303f34715677a8937894c726b8e

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

<<<<<<< HEAD
	      <div>
	        <p>- Calls for Component FinishedTasks -</p>
	        <ListFin finishedTasks={this.state.finishedTasks} />
	      </div>
=======
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
          <ListFin todos={this.state.todos} />
        </div>
      </div>
    )
  }
>>>>>>> d5584fbcb9b09303f34715677a8937894c726b8e

	      <div>
	        <p>-Test Tasks</p>
	        <ChooseTasks handleChooseTask={this.handleChooseTask} />
	      </div>
	    </div>
	  )
	}
}

export default App
