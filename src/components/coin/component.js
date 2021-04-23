import React, { Component } from 'react'

import { numberWithCommas } from '../../utils/format'

class Coin extends Component {
  render() {
    return (
      <tr className="coin">
        <td>
          <label>
            <input
              type="checkbox"
              checked={this.props.watching}
              onChange={() => {
                const coin = {
                  id: this.props.id,
                  name: this.props.name,
                  current_price: this.props.current_price,
                  market_cap_rank: this.props.market_cap_rank,
                }

                this.props.watching ? this.props.unwatch(coin) : this.props.watch(coin)
              }}
            />
          </label>
        </td>
        <td>
          <div>{this.props.market_cap_rank}</div>
        </td>

        <td>
          <div>
            <img src={this.props.image} style={{ width: '30px' }} />
            <span className="coin-name">{this.props.name}</span>
            <span className="coin-ticker">{this.props.symbol?.toUpperCase()}</span>
          </div>
        </td>
        <td>
          <div>${numberWithCommas(this.props.current_price)}</div>
        </td>
        <td>
          <div>
            {numberWithCommas(
              this.props.price_change_percentage_7d_in_currency?.toFixed(2)
            )}
            %
          </div>
        </td>
        <td>
          <div>
            {numberWithCommas(
              this.props.price_change_percentage_24h_in_currency?.toFixed(2)
            )}
            %
          </div>
        </td>
        <td>
          <div>${numberWithCommas(this.props.total_volume)}</div>
        </td>
        <td>
          <div>${numberWithCommas(this.props.market_cap)}</div>
        </td>
      </tr>
    )
  }
}

export default Coin
