import React from "react"

class TaskFin extends React.Component {

  render() {
    return (
      <div className="finishedTasks">
        {this.props.finishedTasks.map((todo, index) => {
          return (
            <span>{index + 1 + " " + todo.value}</span>
          )
        })}
      </div>
    )
  }

}

export default TaskFin
