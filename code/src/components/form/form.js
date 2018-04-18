import React from "react"
import "./form.css"

class Form extends React.Component {

  render() {
    return (
      <div className="form">
        <form onSubmit={ (event) => this.props.handleSubmit(event) }>
          <input className="inputfield"
            onChange={ (event) => this.props.handleChange(event) }
            value={this.props.inputValue}
          />
        </form>
        form
      </div>
    )
  }

}

export default Form
