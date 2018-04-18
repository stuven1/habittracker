import React from "react"

class TaskFin extends React.Component {

  render() {
    return (
      <div className="task-fin">
        <span>
            {this.props.index + 1 + " " + this.props.finishedTask.value}
        </span>
      </div>
    )
  }

}

export default TaskFin
