import React from "react"
import "./chooseTask.css"

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      down: false
    }
  }

  handleClick = () => {
    if (this.state.down) {
      this.props.handleRemoveTask(this.props.task)
    } else {
      this.props.handleAddTask(this.props.task)
    }
    this.setState({
      down: !this.state.down
    })
  }
  render() {
    return (
      <div className="button-main">
        <button
          className={this.state.down ? "down chooseTaskButton" : "chooseTaskButton"}
          onClick={this.handleClick}>
          {this.props.task}
        </button>
      </div>
    )
  }

}

export default Button
