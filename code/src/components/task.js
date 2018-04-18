import React from "react"

class Task extends React.Component {

  render() {
    return (
      <div className="task">
        {/* //internery */}
        <span style={{ textDecoration: this.props.todo.done ? "line-through" : "none" }}>
          {this.props.todo.value}
        </span>
        <button onClick={() => this.props.handleClick(this.props.index)}>{this.props.todo.done ? "undo" : "complete"}</button>

      </div>
    )
  }

}

export default Task
