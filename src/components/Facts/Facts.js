import React from 'react'
import "./Facts.css"

function Facts() {
    return (
        <div className="Facts">
            <h4 className="Facts-title">Facts</h4>
            <table className="Facts-table">
                <tr>
                    <td className="Fact-stmt">Hashing Algorithm</td>
                    <td className="Fact-value">SHA-256</td>
                </tr>
                <tr>
                    <td className="Fact-stmt">Country Origin</td>
                    <td className="Fact-value">Unknown</td>
                </tr>
                <tr>
                    <td className="Fact-stmt">Category</td>
                    <td className="Fact-value">Cryptocurrency</td>
                </tr>
            </table>
            <div className="Supplies">
            <table className="Facts-table">
                <tr>
                    <td className="Fact-stmt">Total Supply</td>
                    <td className="Fact-value">21000000.0</td>
                </tr>
                <tr>
                    <td className="Fact-stmt">Max Supply</td>
                    <td className="Fact-value">21000000.0</td>
                </tr>
                <tr>
                    <td className="Fact-stmt">Circulating</td>
                    <td className="Fact-value">21000000.0</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Facts
