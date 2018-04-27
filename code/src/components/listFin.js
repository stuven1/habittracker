import React from "react"
import "./listfin.css"
import Pineapple from "./Pineapple"

class ListFin extends React.Component {

  render() {

    const filteredArray = this.props.todos.filter(element => element.done)

    return (
      <div className="listfin">
        <div className="choosetask-headline">
          <div>
            {filteredArray.map((todo, index) => {
              return <div key={index}>Task {index +1}: {todo.value}</div>
            })}
          </div>
          <div>
            <p>
              <span className="big">Yay! You have done <span className="green">{filteredArray.length}</span> tasks.</span>
            </p>
          </div>
          { filteredArray.length > 6 ?
          <div className="lf-pineapple">
            <Pineapple />
          </div>
            : <div><div><img className="sport" src={require("../images/sport.gif")}/></div><div>Keep working it <br /> – you are on good track!</div></div>}
        </div>
      </div>
    )
  }
}

export default ListFin
