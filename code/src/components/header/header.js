import React from "react"
import "./header.css"

import Sevenlogoleaf from "../../images/sevenlogoleaf.png"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">

        <div className="logo-container">
          <img className="sevendaylogo" src={Sevenlogoleaf} />
        </div>

      </div>


    )
  }
}

export default Header
