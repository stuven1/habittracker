import React from "react"
import Button from "./Button";

const taskGenerator = ["Go for a walk", "Eat eco", "Take the bus/metro!"]

class ChooseTask extends React.Component {

  render() {
    return (
      <div className="choose-main">
        {taskGenerator.map(element => (
          <Button
            task={element} />
        ))}
        <h2>{this.props.taskGenerator}</h2>
      </div>
    )
  }
}

export default ChooseTask
