import React from 'react'
import "./RankingCard.css"
import { Sparklines, SparklinesLine  } from 'react-sparklines';

function RankingCard({title, abbreviation, change, price, sparkline_data}) {
    return (
        <div className="RankingCard">
            <h4>{title} ({abbreviation})</h4>
            <Sparklines data={sparkline_data} limit={50} width={100} height={10} margin={1}>
                <SparklinesLine color="#fff" style={{strokeWidth:0.2, fill:"none"}}/>
            </Sparklines>
            <small>{change}</small>
            <h2>{price}</h2>
        </div>
    )
}

export default RankingCard
