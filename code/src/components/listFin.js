import React from "react"
import "./listfin.css"
import Pineapple from "./Pineapple"

class ListFin extends React.Component {

  render() {

    const filteredArray = this.props.todos.filter(element => element.done)

    return (
      <div className="listfin">
        <div>
          <p>Here are you'r finished tasks:</p>
          <div>
            {filteredArray.map((element, index) => <div>Task {index +1}: {element.value}</div>)}
          </div>
          <div>
            <p>
              You have completed {filteredArray.length} tasks out of {this.props.todos.length} tasks!
            </p>
          </div>
          { filteredArray.length>6 ?
          <div className="lf-pineapple">
            <Pineapple />
          </div>
          : null}
        </div>
      </div>
    )
  }
}

export default ListFin