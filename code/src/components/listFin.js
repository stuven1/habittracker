import React from "react"
import "./listfin.css"
import Pineapple from "./Pineapple"

class ListFin extends React.Component {

  render() {

    const filteredArray = this.props.todos.filter(element => element.done)

    return (
      <div className="listfin">
        <div>
          <p>Here are your finished tasks:</p>
          <div>
            {filteredArray.map((todo, index) => {
              return <div key={index}>Task {index +1}: {todo.value}</div>
            })}
          </div>
          <div>
            <p>
              You have completed {filteredArray.length} tasks. In your list you have {this.props.todos.length} tasks. Keep up the good work!
            </p>
          </div>
          { filteredArray.length > 6 ?
          <div className="lf-pineapple">
            <Pineapple />
          </div>
            : <div><div><img className="sport" src={require("../images/sport.gif")}/></div><div>You're on the good track!</div></div>}
        </div>
      </div>
    )
  }
}

export default ListFin
