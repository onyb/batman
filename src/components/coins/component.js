import React, { Component } from 'react'

import Coin from '../coin'

class Coins extends Component {
  componentDidMount() {
    this.props.fetchCoins()
    setInterval(() => this.props.fetchCoins(), 10000)
  }

  render() {
    console.log(this.props)
    return (
      <div className="coins-container">
        <table>
          <thead>
            <tr>
              <th />
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coins.map(coin => (
              <Coin {...coin} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Coins
