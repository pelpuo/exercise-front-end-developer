import React, { useState, useEffect } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

import {useParams} from 'react-router-dom'

// redux
import { connect } from "react-redux";
import { fetchCoinHistory } from "./../../redux/Coins/coins-actions";

function Chart({ coinHistory, fetchCoinHistory }) {
    let {coinId} = useParams()
  useEffect(() => {
    fetchCoinHistory(coinId);
    coinHistory.prices&&setData([
        {
          name: "Nov",
          pv: coinHistory.prices[239]?coinHistory.prices[239][1]:0,
        },
        {
          name: "Dec",
          pv: coinHistory.prices[209]?coinHistory.prices[209][1]:0,
        },
        {
          name: "Jan",
          pv: coinHistory.prices[179]?coinHistory.prices[179][1]:0,
        },
        {
          name: "Feb",
          pv: coinHistory.prices[149]?coinHistory.prices[149][1]:0,
        },
        {
          name: "Mar",
          pv: coinHistory.prices[119]?coinHistory.prices[119][1]:0,
        },
        {
          name: "Apr",
          pv: coinHistory.prices[89]?coinHistory.prices[89][1]:0,
        },
        {
          name: "May",
          pv: coinHistory.prices[59]?coinHistory.prices[59][1]:0,
        },
        {
          name: "June",
          pv: coinHistory.prices[29]?coinHistory.prices[29][1]:0,
        },
        {
          name: "July",
          pv: coinHistory.prices[0]?coinHistory.prices[0][1]:0,
        },
      ])
  }, [fetchCoinHistory, coinId, coinHistory]);
  let [data, setData] = useState([]) 

  return (
    <div className="Chart">
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="2 8" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            cursor={{ stroke: "#4A5BB8", strokeWidth: 2 }}
            itemStyle={{ backgroundColor: "#4A5BB8", color: "#fff" }}
            contentStyle={{
              backgroundColor: "#4A5BB8",
              border: 0,
              color: "#fff",
              borderRadius: "1em",
              textAlign: "center",
              padding: "1em 2em",
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#4A5BB8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coinHistory: state.coin.currentCoinHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoinHistory: (id) => dispatch(fetchCoinHistory(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
