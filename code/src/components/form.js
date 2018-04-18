import React from "react"

class Form extends React.Component {

  render() {
    return (
      <div className="form">
        <form onSubmit={ (event) => this.props.handleSubmit(event) }>
          <input
            onChange={ (event) => this.props.handleChange(event) }
            value={this.props.inputValue}
          />
        </form>
      </div>
    )
  }

}

export default Form
