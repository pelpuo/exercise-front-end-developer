import React from "react";
import "./Home.css"

// Importing components
import Event from "./../../components/Event/Event";
import RankingCard from "./../../components/RankingCard/RankingCard";
import Coin from "./../../components/Coin/Coin";

// Icons
import Search from "./../../images/search.png"

function Home() {
  return (
    <div className="Home-outer">
        <div className="search-bar">
            <img src={Search} alt="search" />
            <input type="text" placeholder="search"/>
        </div>
            <div className="Home-inner">
      <div className="container-column">
      <div className="Market-leaders-container">
        <h1>Market Leaders</h1>

        <RankingCard
          title="Bitcoin"
          abbreviation="BTC"
          change="192.89"
          price="$1793.89"
        />

        <RankingCard
          title="Bitcoin"
          abbreviation="BTC"
          change="192.89"
          price="$1793.89"
        />

        <RankingCard
          title="Bitcoin"
          abbreviation="BTC"
          change="192.89"
          price="$1793.89"
        />

        <RankingCard
          title="Bitcoin"
          abbreviation="BTC"
          change="192.89"
          price="$1793.89"
        />
      </div>

      <div className="All-coins-container">
        <h1>All Coins</h1>

        <div className="All-coins-container-inner">
        <Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />

<Coin name="Bitcoin" symbol="BTC" />
        </div>
      </div>
      </div>

      <div className="Events-container">
        <h2>Events</h2>
        <Event
          title="TOKEN2049 London"
          text="Lorem Ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod tempor incididunt up labore et dolaore 
            magna aliqua"
        />

        <Event
          title="TOKEN2049 London"
          text="Lorem Ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod tempor incididunt up labore et dolaore 
            magna aliqua"
        />

        <Event
          title="TOKEN2049 London"
          text="Lorem Ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod tempor incididunt up labore et dolaore 
            magna aliqua"
        />

        <Event
          title="TOKEN2049 London"
          text="Lorem Ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod tempor incididunt up labore et dolaore 
            magna aliqua"
        />

        <Event
          title="TOKEN2049 London"
          text="Lorem Ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod tempor incididunt up labore et dolaore 
            magna aliqua"
        />
      </div>
    </div>
    </div>
  );
}

export default Home;
