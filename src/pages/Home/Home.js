import React, { useEffect } from "react";
import "./Home.css";

import {Link} from 'react-router-dom'

// Importing components
import Event from "./../../components/Event/Event";
import RankingCard from "./../../components/RankingCard/RankingCard";
import Coin from "./../../components/Coin/Coin";

// Icons
import Search from "./../../images/search.png";

// redux
import { connect } from "react-redux";
import { fetchCoins, fetchCoinInfo, fetchCoin } from "./../../redux/Coins/coins-actions";
import { fetchEvents } from "./../../redux/Events/events-actions";

function Home({ coins, fetchCoins, coinInfo, fetchCoinInfo, events, fetchEvents, fetchCoin, currentCoin }) {
  useEffect(() => {
    fetchCoins();
    fetchCoinInfo();
    fetchEvents();
  }, [fetchCoinInfo, fetchCoins, fetchEvents, fetchCoin]);

  return (
    <div className="Home-outer">
      <div className="search-bar">
        <img src={Search} alt="search" />
        <input type="text" placeholder="search" />
      </div>
      <div className="Home-inner">
        <div className="container-column">
          <div className="Market-leaders-container">
            <h1>Market Leaders</h1>

            {coinInfo.map((item) => (
              <RankingCard
                id={item.id}
                title={item.name}
                abbreviation={item.symbol}
                change={item.price_change_24h.toFixed(2)}
                price={`$${item.current_price}`}
                sparkline_data = {item.sparkline_in_7d.price}
              />
            ))}
          </div>

          <div className="All-coins-container">
            <h1>All Coins</h1>

            <div className="All-coins-container-inner">
              {coins.map((coin) => coin.id&&(
                <div className="Coin-outer">
                  <Link to={`/stats/${coin.id}`}>
                  <Coin id={coin.id} name={coin.name} symbol={coin.symbol} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="Events-container">
          <h2>Events</h2>
          {events.map(event => (<Event
            title={event.title}
            text={`${event.description.substring(1, 200)}...`}
          />))}
          

          
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coins: state.coin.coins,
    coinInfo: state.coin.coinInfo,
    events: state.event.events,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
