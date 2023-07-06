import React from "react"
import logo from "../images/healthier-logo-whitesmoke.png"

function Header() {
    return (
        <div className="header dotted">
            <div className="header-logo-container dotted">
                <a href="index.html">   
                    <img src={logo} className="header-logo dotted"
                        alt="Logo of name spelled 'Healthier'. A green kale leaf replaces the 'l'."></img>
                </a>
            </div>
            <div className="header-items-container dotted">
                <ul className="header-items dotted">
                    <li className="dotted"><a href="index.html">home</a></li>
                    <li className="dotted"><a href="index.html">about</a></li>
                    <li className="dotted"><a href="index.html">contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header