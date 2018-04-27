import React from "react"
import "./task.css"

class Task extends React.Component {

  handleDeleteClick = () => {
    this.props.handleRemoveTask(this.props.todo.id)
  }

  handleClick = () => {
    this.props.handleClick(this.props.todo.index)
  }

  render() {
    return (
      <div className="task-container">
        {/* <div className="task-text-button"> */}
          <div className="task-text">
            <span style={{ textDecoration: this.props.todo.done ? "line-through" : "none" } }>
              {this.props.todo.value}
            </span>
          </div>

          <div>
            <button className="task-button" onClick={() => this.props.handleClick(this.props.index)}>
              {this.props.todo.done ? "todo" : "done"}
            </button>
          </div>

          <div>
            <button className="delete-button" onClick={this.handleDeleteClick}>
              Delete
            </button>
          </div>

        {/* </div> */}
      </div>
    )
  }

}

export default Task
