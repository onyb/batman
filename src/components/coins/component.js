import React, { Component } from 'react'

import Coin from '../coin'

class Coins extends Component {
  render() {
    return (
      <div className="coins-container">
        <table>
          <thead>
            <tr>
              <th />
              <th>#</th>
              <th>Coin</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Market Cap</th>
              <th>Last 7 days</th>
            </tr>
          </thead>
          <tbody>
            <Coin />
            <Coin />
            <Coin />
          </tbody>
        </table>
      </div>
    )
  }
}

export default Coins
