import React from "react";
import "./Exchange.css";

function Exchange({data}) {
  return (
    <div className="Exchange">
      <h4 className="Exchange-title">Exchange</h4>
      <div className="Exchange-row sell">
        <small>Sell</small>
        <h2 className="Exchange-row-value">6700</h2>
        <select className="Exchange-row-select">
          <option>USD</option>
        </select>
      </div>
      <div className="Exchange-row buy">
        <small>Buy</small>
        <h2 className="Exchange-row-value">0.609898</h2>
        <select className="Exchange-row-select">
          <option>BTC</option>
        </select>
      </div>

      <div className="Exchange-row-bottom">
        <small>1 BTC  = 8343.43 USD</small>
        <button><p>Exchange</p> <small>&rarr;</small></button>
      </div>
    </div>
  );
}

export default Exchange;
