import React from "react"

class FinishedTasks extends React.Component {

  render() {
    return (
      <div className="finishedTasks">
        {this.props.finishedTasks.map((todo, index) => {
          return (
            <span>{this.props.finishedTasks.value}</span>
          )
        })}
      </div>
    )
  }

}

export default FinishedTasks
