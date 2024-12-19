import React from 'react'
import { ShoppingBag } from 'lucide-react'
import './index.less'
import { bill } from '../../api/getBillsInfo'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

interface ExpenseCardProps {
  bills: bill[]
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ bills }) => {
  const navigate = useNavigate()
  const handleBillClick = (billId: string) => {
    console.log(billId)
    navigate(`/detail/${billId}`)
  }

  return (
    <div className="recent-transactions">
      <div className="header">
        <h3>Recent Transaction</h3>
      </div>
      <div className="transactions-list">
        {bills.map((bill) => (
          <div key={bill._id} className="transaction-item" onClick={() => handleBillClick(bill._id)}>
            <div className={`icon-container`}>
              <ShoppingBag size={20} />
            </div>
            <div className="transaction-info">
              <div className="transaction-main">
                <span className="transaction-type">{bill.category}</span>
                <span className={`transaction-amount ${bill.type === 0 ? 'expense' : ''}`}>
                  {bill.type === 0 ? '-¥' + bill.amount : '+¥' + bill.amount}
                </span>
              </div>
              <div className="transaction-details">
                <span className="transaction-description">{bill.description}</span>
                <span className="transaction-time">{dayjs(bill.date).format('YYYY/MM/DD')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseCard
