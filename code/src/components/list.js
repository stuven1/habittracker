import React from "react"
import Task from "./task"

class List extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      <div className="list-container">
=======
      <div className="list">
        <div>
>>>>>>> 7586cfb6eed222e39f6cf0c0df98c0ea6828deb5
        {this.props.todos.map((todo, index) => {
          return (
            <Task
              key={index}
              index={index}
              handleClick={this.props.handleClick}
              todo={todo} />
          )
        })}
        </div>
        <div>
          <p>
            Collect 7 tasks and you'll get a gratification!
          </p>
        </div>
      </div>

    )
  }

}

export default List
