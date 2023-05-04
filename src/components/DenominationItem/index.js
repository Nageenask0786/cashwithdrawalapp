import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const OnclickDeductBtn = () => {
    updateBalance(value)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={OnclickDeductBtn}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
