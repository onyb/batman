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
          <span>1</span>
        </td>

        <td>
          <span>Bitcoin</span>
        </td>
        <td>
          <span>BTC</span>
        </td>
        <td>
          <span>$49,821.97</span>
        </td>
        <td>
          <span>-0.4%</span>
        </td>
        <td>
          <span>7.89%</span>
        </td>
        <td>
          <span>20.89%</span>
        </td>
        <td>
          <span>$75,495,200,735</span>
        </td>
        <td>
          <span>$972,051,745,853</span>
        </td>
        <td>
          <span>Charts</span>
        </td>
      </tr>
    )
  }
}

export default Coin
