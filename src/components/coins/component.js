import React, { Component } from 'react'

import Coin from '../coin'

class Coins extends Component {
  componentDidMount() {
    this.props.fetchCoins(this.props.preferences.page)
    setInterval(() => this.props.fetchCoins(this.props.preferences.page), 5000)
  }

  render() {
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
              <Coin
                {...coin}
                watching={this.props.preferences.watchlist
                  .map(e => e.id)
                  .includes(coin.id)}
                watch={this.props.watchCoin}
                unwatch={this.props.unwatchCoin}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Coins
