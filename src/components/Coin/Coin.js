import React from 'react'
import "./Coin.css"

function Coin({name, symbol}) {
    return (
        <div className="Coin">
            <h4>{name} ({symbol})</h4>
        </div>
    )
}

export default Coin
