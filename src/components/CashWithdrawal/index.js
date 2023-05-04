import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevBal => ({balance: prevBal.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.split(0, 1)
    return (
      <div className="main_container">
        <div className="card">
          <div className="flex">
            <div className="card2">
              <p className="profile">{initial}</p>
            </div>
            <p className="para">{name}</p>
          </div>
          <div className="flex2">
            <p className="par2">Your Balance</p>
            <p className="head">{balance}</p>
          </div>
          <p className="p2">In Rupees</p>
          <p className="heading1">Withdraw</p>
          <p className="head2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsDetails={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
