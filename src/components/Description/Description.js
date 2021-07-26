import React from 'react'
import "./Description.css"

function Description({text}) {
    return (
        <div className="Description">
          <p className="Description-title">Description:</p>  
          <div className="Description-text">{`${text?.substring(0,400)}...`}</div>
        </div>
    )
}

export default Description
