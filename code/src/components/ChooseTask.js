import React from "react"
import Button from "./Button"
import "./chooseTask.css"

const taskGenerator = ["Recycle", "Eat eco", "Commute", "Buy nothing-day", "Shower like Gunde", "Use Kivra!" ]

class ChooseTask extends React.Component {

  render() {
    return (
      <div className="chooseTask-container">
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
