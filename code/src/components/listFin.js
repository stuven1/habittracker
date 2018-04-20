import React from "react"
import TaskFin from "./taskFin"

class ListFin extends React.Component {

  render() {
    return (
      <div className="list-fin">
        <p>Your finished tasks:</p>
        {this.props.finishedTasks.map((finishedTask, index) => {
          return (
            <TaskFin
              key={index}
              index={index}
              finishedTask={finishedTask} />
          )
        })}
      </div>
    )
  }

}

export default ListFin

