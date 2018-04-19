import React from "react"
import TaskFin from "./taskFin"

class ListFin extends React.Component {

  render() {

    const filteredArray = this.props.todos.filter(element => element.done ? element.value : "nope")


    return (
      <div className="list-fin">
        <div>
          {filteredArray.map((element) => {return "resultat" + element})}
        </div>

        /*
        <p>Your finished tasks:</p>
        {this.props.finishedTasks.map((finishedTask, index) => {
          return (
            <TaskFin
              key={index}
              index={index}
              finishedTask={finishedTask} />
          )
        })}
        */


      </div>
    )
  }

}

export default ListFin

