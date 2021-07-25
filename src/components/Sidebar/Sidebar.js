import React from 'react'
import { NavLink, IndexLink } from 'react-router-dom'
import "./Sidebar.css"
import Barcode from "./../../images/barcode.png"
import Chart from "./../../images/chart.png"
import Menu from "./../../images/menu.png"

function Sidebar(props) {
    return (
        <div className="Sidebar">
            <div className="nav-icon">
                <img src={Menu}  width="20" alt="icon"/>
            </div>
            <nav className="Sidebar-nav">
            <ul>
                <li>
                <NavLink to="/" activeClassName="active" exact={true}>
                    <div className="icon"><img src={Barcode}  width="20" alt="icon"/></div>
                </NavLink>
                </li>
                <li>
                <NavLink to="/stats" activeClassName="active">
                    <div className="icon"><img src={Chart}  width="20" alt="icon"/></div>
                </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Sidebar
