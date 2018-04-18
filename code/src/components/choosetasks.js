import React from "react"
import "./choosetask.css"

const taskGenerator = ["Hej", "HÅ"]

class ChooseTask extends React.Component {
	// { value: "Cool cleaning", done: false , date: [] },
	// { value: "Go public", done: false , date: [] }
	state = {
	  choosenTask: ""
	}

	handleChooseTask = task => {
	  console.log("hej")
	  this.setState({
	    choosenTask: task
	  })
	}

	render() {
	  return (
	    <div className="choosepage">
	      <p>Last clicked: {this.props.choosenTask}</p>
	      {taskGenerator.map(task => (
	        <button key={task} task={task} onButtonPress={this.handleChooseTask} />
	      ))}
	    </div>
	  )
	}
}

export default ChooseTask
