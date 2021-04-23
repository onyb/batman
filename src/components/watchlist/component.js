import React, { Component } from 'react'

import { numberWithCommas } from '../../utils/format'

class WatchList extends Component {
  render() {
    return (
      <div className="coins-container">
        <table>
          <thead>
            <tr>
              <th />
              <th>Coin</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {[...this.props.preferences.watchlist]
              .sort((a, b) => a.market_cap_rank - b.market_cap_rank)
              .map(coin => (
                <WatchListEntry {...coin} unwatch={this.props.unwatchCoin} />
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class WatchListEntry extends React.Component {
  render() {
    return (
      <tr className="coin">
        <td>
          <label>
            <input
              type="checkbox"
              checked={true}
              onChange={() => {
                const coin = {
                  id: this.props.id,
                  name: this.props.name,
                  current_price: this.props.current_price,
                  market_cap_rank: this.props.market_cap_rank,
                }

                this.props.unwatch(coin)
              }}
            />
          </label>
        </td>

        <td>
          <div>{this.props.name}</div>
        </td>
        <td>
          <div>${numberWithCommas(this.props.current_price)}</div>
        </td>
      </tr>
    )
  }
}

export default WatchList
