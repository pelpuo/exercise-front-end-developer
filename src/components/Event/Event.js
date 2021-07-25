import React from 'react'
import './Event.css'

function Event({title, text}) {
    return (
        <div className="Event">
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}

export default Event
