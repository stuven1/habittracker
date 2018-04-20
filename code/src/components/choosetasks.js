import React from "react"
import "./choosetask.css"

const taskGenerator = ["Go for a walk", "Eat eco", "Take the bus/metro!"]

class ChooseTasks extends React.Component {
  render() {
    return (
      <div className="choosepage">
        <h3>FREDAG TEST</h3>

        {taskGenerator.map(task => (
          <button onClick={() => this.props.handleChooseTask(task)}>{task}</button>
        ))}
        <h2>{this.props.taskGenerator}</h2>
      </div>
    )
  }
}

export default ChooseTasks
