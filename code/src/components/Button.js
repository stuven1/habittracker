import React from "react"

class Button extends React.Component {

  state = {
    isPressed: false
  }

  render() {
    return (
      <div className="button-main">
        <button
          >
          {this.props.task}
        </button>
      </div>
    )
  }

}

export default Button