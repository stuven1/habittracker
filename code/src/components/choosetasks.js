import React from "react"
import "./choosetask.css"

const taskGenerator = ["Hej. Vad heter du?", "HÅ- det är ", "Hejdå!"]

class ChooseTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastPickedTask: ""
    }
  }

  render() {
    return (
      <div className="choosepage">
        <h3>TORSDAG TEST</h3>

        {taskGenerator.map(task => (
          <button key={task} task={task} onButtonPress={this.handleChooseTask} />
        ))}
        <h2>{this.props.taskGenerator}</h2>
      </div>
    )
  }
}

export default ChooseTask
