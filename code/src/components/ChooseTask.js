import React from "react"
import Button from "./Button"
import "./chooseTask.css"

const taskGenerator = ["Recycle", "Eat eco", "Commute", "Buy nothing", "Shower fast", "Use Kivra!", "Rent a sweater", "Turn it off", "Ride a bike", "switch to LED" ]

class ChooseTask extends React.Component {

  render() {
    return (
      <div className="chooseTask-container">

        <div className="choosetask-headline">Choose your world saving tasks!</div>
        {taskGenerator.map((element, index) => (
          <Button
            key={index}
            task={element}
            handleAddTask={this.props.handleAddTask} />
        ))}
      </div>
    )
  }
}

export default ChooseTask
