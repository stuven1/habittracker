import React from "react"
import Task from "./task"
import "./list.css"

class List extends React.Component {

  render() {
    return (
      <div className="list">

        <div>
          <p className="choosetask-headline">
            Finish 7 todos <br /> – get a great reward!
          </p>
        </div>

        <div>
          <div>
            <p className="underlined">
              My world-saving <br /> awesome todo-list:
            </p>
          </div>
          <div>
          {this.props.todos.map((todo, index) => {
            return (
              <Task
                key={index}
                index={index}
                handleClick={this.props.handleClick}
                todo={todo}
                handleRemoveTask={this.props.handleRemoveTask} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default List
