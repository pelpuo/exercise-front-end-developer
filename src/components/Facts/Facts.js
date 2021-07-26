import React from "react";
import "./Facts.css";

function Facts({data}) {
  return (
    <div className="Facts">
      <h4 className="Facts-title">Facts</h4>
      <table className="Facts-table">
        <tbody>
          <tr>
            <td className="Fact-stmt">Hashing Algorithm</td>
            <td className="Fact-value">{data?.hashing_algorithm}</td>
          </tr>
          <tr>
            <td className="Fact-stmt">Country Origin</td>
            <td className="Fact-value">{data?.country_origin?data.country_origin:"Unknown"}</td>
          </tr>
          <tr>
            <td className="Fact-stmt">Category</td>
            <td className="Fact-value">{data?.categories?data.categories[0]:"Unknown"}</td>
          </tr>
        </tbody>
      </table>
      <div className="Supplies">
        <table className="Facts-table">
          <tbody>
            <tr>
              <td className="Fact-stmt">Total Supply</td>
              <td className="Fact-value">{data?.market_data?.total_supply}</td>
            </tr>
            <tr>
              <td className="Fact-stmt">Max Supply</td>
              <td className="Fact-value">{data?.market_data?.max_supply}</td>
            </tr>
            <tr>
              <td className="Fact-stmt">Circulating</td>
              <td className="Fact-value">{data?.market_data?.circulating_supply}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Facts;
