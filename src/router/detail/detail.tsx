import React, { useEffect, useState } from 'react'
import './detail.less'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { bill, getBillsInfo } from '../../api/getBillsInfo'
import { formattedDate } from '../../utils/time'
import { deleteBill } from '../../api/deleteBill'

const Detail: React.FC = () => {
  const [billsId, setBillsId] = useState<string>('')
  const { billId } = useParams()

  const [bill, setBill] = useState<bill>()

  useEffect(() => {
    getBillsInfo().then((res) => {
      console.log(res)
      setBillsId(res.data.billsId)
      res.data.bills.forEach((item) => {
        if (item._id === billId) {
          setBill(item)
        }
      })
    })
  }, [billId])

  const handleDeleteClick = () => {
    console.log('delete')
    if (billId) {
      deleteBill({ billsId, billId }).then((res) => {
        console.log(res)
      })
    }
  }
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/home')
  }

  return (
    <div className="transaction-page">
      <header className="transaction-header">
        <button className="header-button" onClick={handleBackClick}>
          <ArrowLeft className="header-icon" />
        </button>
        <h1 className="header-title">Detail Transaction</h1>
        <button className="header-button" onClick={handleDeleteClick}>
          <Trash2 className="header-icon" />
        </button>
      </header>
      <div className="amount-section">
        <div className="amount">¥{bill?.amount}</div>
        <div className="transaction-title">{bill?.category}</div>
        <div className="transaction-date">{formattedDate(bill?.date)}</div>
      </div>

      <div className="transaction-content">
        <div className="details-container">
          <div className="info-section">
            <div className="info-row">
              <div className="info-col">
                <div className="info-label">Type</div>
                <div className="info-value">{bill?.type === 0 ? 'Expense' : 'Income'}</div>
              </div>
              <div className="info-col">
                <div className="info-label">Category</div>
                <div className="info-value">{bill?.category}</div>
              </div>
              <div className="info-col">
                <div className="info-label">Wallet</div>
                <div className="info-value">Wallet</div>
              </div>
            </div>
          </div>

          <div className="description-section">
            <h2 className="section-title">Description</h2>
            <p className="description-text">{bill?.description}</p>
          </div>
        </div>
      </div>

      <div className="edit-button-container">
        <button className="edit-button">Edit</button>
      </div>
    </div>
  )
}

export default Detail
