import React from "react"
import "./task.css"

class Task extends React.Component {

  render() {
    return (
      <div className="task-container">
        <div classNmae="task-text-button">
          {/* // ternary */}
          <div>className="task-text">
            <span style={{ textDecoration: this.props.todo.done ? "line-through" : "none" }}>
              {this.props.todo.value}
            </span>
          </div>
          <div className="task-button">
            <button onClick={() => this.props.handleClick(this.props.index)}>
              {this.props.todo.done ? "undo" : "complete"}
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Task
