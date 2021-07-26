import React from 'react'
import "./Coin.css"
import {Link} from 'react-router-dom'

function Coin({name, symbol, id}) {
    return (
        <div className="Coin">
            <h4>{name} ({symbol})</h4>
        </div>
    )
}

export default Coin
