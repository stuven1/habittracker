import React from "react"
import Button from "./Button"
import "./chooseTask.css"

const taskGenerator = ["Recycle", "Eat eco", "Commute", "Buy nothing", "Shower fast", "Use Kivra!", "Rent a sweater", "Turn it off", "Ride a bike", "switch to LED" ]

class ChooseTask extends React.Component {

  render() {
    return (
      <div >
        <div className="choosetask-headline">Choose your <br /> world saving tasks!</div>

        <div className="chooseTask-container">

        {taskGenerator.map((element, index) => (
          <Button
            key={index}
            task={element}
            handleAddTask={this.props.handleAddTask}
            handleRemoveTask={this.props.handleRemoveTask} />
        ))}
        </div>
      </div>
    )
  }
}

export default ChooseTask
