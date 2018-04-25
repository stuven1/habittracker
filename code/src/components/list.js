import React from "react"
import Task from "./task"
import "./list.css"

class List extends React.Component {

  render() {
    return (
      <div className="list">

        <div>
          <p className="white">
            Collect 7 tasks and you'll get a gratification!
          </p>
        </div>

        <div>
          <div>
            <p className="underlined">
              YOUR TASK-LIST
            </p>
          </div>
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
        </div>
      </div>
    )
  }

}

export default List
