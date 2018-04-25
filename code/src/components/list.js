import React from "react"
import Task from "./task"

class List extends React.Component {

  render() {
    return (
      <div className="list">
        <div>
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
