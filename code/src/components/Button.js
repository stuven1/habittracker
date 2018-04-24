import React from "react"

class Button extends React.Component {

  render() {
    return (
      <div className="button-main">
        <button
          onClick={console.log(this.props.task)}>
          {this.props.task}
        </button>
      </div>
    )
  }

}

export default Button