import React from "react"
import "./gratification.css"

class Gratification extends React.Component {

  render() {
    return (
      <div className="gratification">
        <div className="pineapple">
          <div className="leaf middle"></div>
          <div className="leaf left"></div>
          <div className="leaf right"></div>
          <div className="shadow"></div>
          <div className="body">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
            <div className="arm left"></div>
            <div className="arm right"></div>
            <div className="leg left"></div>
            <div className="leg right"></div>
          </div>
        </div>
      </div>
    )
  }

}

export default Gratification