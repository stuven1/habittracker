import React from "react"
import "./chooseTask.css"

class Button extends React.Component {


  handleClick = () => {
    this.props.handleAddTask(this.props.task)
  }
  render() {
    return (
      <div className="button-main">
        <button className="chooseTask-button"
          onClick={this.handleClick}>
          {this.props.task}
        </button>
      </div>
    )
  }

}

export default Button
