import React from "react"
import Task from "./task"

class List extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          return (
            <Task
              key={index}
              index={index}
              handleClick={this.props.handleClick}
              todo={todo} />
          )
        })}
        list
      </div>
    )
  }

}

export default List
