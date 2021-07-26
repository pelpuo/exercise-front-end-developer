import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css"
import Barcode from "./../../images/barcode.png"
import Chart from "./../../images/chart.png"
import Menu from "./../../images/menu.png"

// redux
import { connect } from "react-redux";

function Sidebar({ coins, currentCoin }) {
    const [coinId, setCoinId] = useState("")

    useEffect(() => {
        if( currentCoin !== {}){
            setCoinId(currentCoin.id)
        }else if(coins !== {}){
            setCoinId(coins[0].id)
        }

    }, [coins, currentCoin])

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
                <NavLink to={`/stats/${coinId}`} activeClassName="active">
                    <div className="icon"><img src={Chart}  width="20" alt="icon"/></div>
                </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      coins: state.coin.coins,
      currentCoin: state.coin.currentCoin
    };
  };
  
  
  export default connect(mapStateToProps)(Sidebar);
