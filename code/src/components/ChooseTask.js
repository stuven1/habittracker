import React from "react"
import Button from "./Button";

const taskGenerator = ["Go for a walk", "Eat eco", "Take the bus/metro!"]

class ChooseTask extends React.Component {

  render() {
    return (
      <div className="choose-main">
        {taskGenerator.map(element => (
          <Button
            task={element}
            handleChooseTask={this.props.handleChooseTask}/>
        ))}
      </div>
    )
  }
}

export default ChooseTask
