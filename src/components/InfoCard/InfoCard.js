import React from 'react'
import "./InfoCard.css"

import Description from "./../Description/Description"
import Facts from "./../Facts/Facts"

import Website from "./../../images/www.png";
import Github from "./../../images/github.png";
import Reddit from "./../../images/reddit.png";

function InfoCard() {
    return (
        <div className="Info-container">
          <h4 className="Info-container-title">Info Card</h4>
          <Description />
          <div className="Links">
            <div className="Links-website Links-link">
              <small>Website</small>
              <img src={Website} alt="icon"/>
            </div>
            <img className="Links-reddit Links-link" src={Reddit} alt="icon"/>
            <img className="Links-github Links-link" src={Github} alt="icon"/>
          </div>
          <Facts />
        </div>
    )
}

export default InfoCard
