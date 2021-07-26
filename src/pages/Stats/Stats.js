import React, {useState, useEffect} from "react";
import "./Stats.css";
import {useParams} from 'react-router-dom';

// Icons
import Search from "./../../images/search.png";

// Components
import InfoCard from "./../../components/InfoCard/InfoCard";
import Exchange from "./../../components/Exchange/Exchange";
import Chart from "./../../components/Chart/Chart";

// redux
import { connect } from "react-redux";
import { fetchCoins, fetchCoinInfo, fetchCoin } from "./../../redux/Coins/coins-actions";
import { fetchEvents } from "./../../redux/Events/events-actions";

function Stats({currentCoin, fetchCoin}) {
  // const [coinId, setCoinId] = useState("")
  let {coinId} = useParams()

  useEffect(()=>{
      fetchCoin(coinId)
  }, [fetchCoin, currentCoin, coinId])

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
              <h3>${currentCoin?.market_data?.current_price?.usd}</h3>
              <Chart coinId={coinId} />
            </div>

            <div className="Exchange-and-rank">
              <Exchange data={currentCoin}/>
              <div className="Rank">
                <h4 className="Rank-name">Alexa Rank</h4>
                <h2 className="Rank-val">{currentCoin?.public_interest_stats?.alexa_rank}</h2>
              </div>
            </div>
          </div>
        </div>
        <InfoCard data={currentCoin} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coins: state.coin.coins,
    currentCoin: state.coin.currentCoin
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoins: () => dispatch(fetchCoins()),
    fetchCoinInfo: () => dispatch(fetchCoinInfo()),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchCoin: (id) => dispatch(fetchCoin(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
