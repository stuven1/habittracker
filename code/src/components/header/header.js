import React from "react"
import "./header.css"
import KivraLogo from "../../images/kivralogo.png"
import Sevenlogoleaf from "../../images/sevenlogoleaf.png"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">

        <div className="logo-container">
          <img className="sevendaylogo" src={Sevenlogoleaf} alt="Seven day world save-logo" />
        </div>
        <div className="kivra-logo-container">
          <p className="inCollab-txt">in collaboration with</p>
          <img className="kivra-logo" src={KivraLogo} alt="Kivra logo" />
        </div>

        <a href="#f1">
          <button className="go-button">
            Go!
          </button>
        </a>

      </div>
    )
  }
}

export default Header