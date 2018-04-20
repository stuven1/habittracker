import React from "react"

class ListFin extends React.Component {

  render() {

    const filteredArray = this.props.todos.filter(element => element.done)

    return (
      <div className="list-fin">
        <p>Your finished tasks NEW WAY with high-tek:</p>
        <div>
          {filteredArray.map((element, index) => {return <div>Resultat för indexpost nr: {index +1}. Värde i sträng: {element.value}</div>})}
          {console.log(this.props.todos, filteredArray)}
        </div>
        <div>
          <p>
            You have completed {filteredArray.length} tasks out of {this.props.todos.length} tasks. Depending on the first number, you get a CSS-animation.
          </p>
        </div>

      </div>
    )
  }

}

export default ListFin