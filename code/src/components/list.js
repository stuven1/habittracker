import React from "react"
import Task from "./task"
import "./list.css"

class List extends React.Component {

  render() {
    return (
      <div className="list">
        <div>
          <div>
            <p>
              Collect 7 tasks and you'll get a gratification!
            </p>
          </div>
          <div>
            <p>
              Your task-list:
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
          <div>
            <p>
              Insert new task here:
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default List
