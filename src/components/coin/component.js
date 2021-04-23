import React, { Component } from 'react'

class Coin extends Component {
  render() {
    return (
      <tr className="coin">
        <td>
          <label>
            <input type="checkbox" />
          </label>
        </td>
        <td>
          <span>{this.props.market_cap_rank}</span>
        </td>

        <td>
          <div>
            <img src={this.props.image} style={{ width: '30px' }} />
            <span className="coin-name">{this.props.name}</span>
            <span className="coin-ticker">{this.props.symbol?.toUpperCase()}</span>
          </div>
        </td>
        <td>
          <div>${this.props.current_price}</div>
        </td>
        <td>
          <div>{this.props.price_change_percentage_7d_in_currency?.toFixed(2)}%</div>
        </td>
        <td>
          <div>{this.props.price_change_percentage_24h_in_currency?.toFixed(2)}%</div>
        </td>
        <td>
          <div>${this.props.total_volume}</div>
        </td>
        <td>
          <div>${this.props.market_cap}</div>
        </td>
      </tr>
    )
  }
}

export default Coin
