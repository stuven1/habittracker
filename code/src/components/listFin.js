import React from "react"
import TaskFin from "./taskFin"

class ListFinished extends React.Component {

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

export default ListFinished

