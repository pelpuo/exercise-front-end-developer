import React from 'react'
import "./RankingCard.css"

function RankingCard({title, abbreviation, change, price}) {
    return (
        <div className="RankingCard">
            <h4>{title} ({abbreviation})</h4>
            <small>{change}</small>
            <h2>{price}</h2>
        </div>
    )
}

export default RankingCard
