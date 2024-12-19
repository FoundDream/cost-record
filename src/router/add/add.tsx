import React, { useEffect, useState } from 'react'
import './add.less'
import { useNavigate } from 'react-router-dom'
import { addBill, getBillsInfo } from '../../api'

const Add: React.FC = () => {
  const [billsId, setBillId] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [isRepeat, setIsRepeat] = useState<boolean>(false)
  const [type, setType] = useState<number>(0)
  const [category] = useState<string>('Food')
  const [description, setDescription] = useState<string>('')

  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/home')
    console.log('back')
  }

  useEffect(() => {
    getBillsInfo().then((res) => {
      console.log(res)
      setBillId(res.data.billsId)
    })
  }, [])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value)
    setAmount(newAmount)
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newType = Number(e.target.value)
    setType(newType)
  }

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newCategory = e.target.value;
  //   setCategory(newCategory);
  // };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value
    setDescription(newDescription)
  }

  const handleSubmit = () => {
    addBill({
      billsId,
      amount,
      type,
      category,
      description,
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="expense-page">
      <div className="expense-header">
        <button className="back-button" onClick={handleBackClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="back-icon"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="header-title">Expense</h1>
      </div>

      <div className="amount-section">
        <h2 className="amount-label">How much?</h2>
        <div className="amount-display">
          <span className="currency">$</span>
          <span className="amount">{amount}</span>
        </div>
      </div>

      <div className="form-section">
        <div className="input-group">
          <button className="select-button">
            <span className="select-label">Category</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="select-icon"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className="input-group">
          <input type="text" className="text-input" placeholder="Description" onChange={handleDescriptionChange} />
        </div>

        <div className="input-group">
          <input type="number" className="text-input" placeholder="Amount" onChange={handleAmountChange} />
        </div>

        <div className="input-group">
          <input type="number" className="text-input" placeholder="Type" pattern="[01]*" onChange={handleTypeChange} />
        </div>

        <div className="repeat-section">
          <div className="repeat-label">
            <span className="repeat-title">Repeat</span>
            <span className="repeat-subtitle">Repeat transaction</span>
          </div>
          <label className="toggle">
            <input type="checkbox" checked={isRepeat} onChange={() => setIsRepeat(!isRepeat)} />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <button className="continue-button" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Add
