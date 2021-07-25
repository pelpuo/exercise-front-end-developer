import React from "react";
import "./Stats.css";

// Icons
import Search from "./../../images/search.png";

// Components
import InfoCard from "./../../components/InfoCard/InfoCard";
import Exchange from "./../../components/Exchange/Exchange";

function Stats() {
  return (
    <div className="Stats-outer">
      <div className="Stats-inner">
        <div className="Stats-container-column-outer">
          <div className="Search-and-Date">
            <div className="search-bar">
              <img src={Search} alt="search" />
              <input type="text" placeholder="search" />
            </div>
            <div className="Date">
              <p>Nov 2020 - July 2021</p>
            </div>
          </div>
          <div className="Stats-container-column">
            <div className="Trend-container">
              <h3>$29,800.65</h3>
            </div>

            <div className="Exchange-and-rank">
              <Exchange />
              <div className="Rank">
                <h4 className="Rank-name">Alexa Rank</h4>
                <h2 className="Rank-val">9440</h2>
              </div>
            </div>
          </div>
        </div>
        <InfoCard />
      </div>
    </div>
  );
}

export default Stats;
