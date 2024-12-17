import React from "react";
import { ShoppingBag } from "lucide-react";
import "./index.less";
import { bill } from "../../api/getBillsInfo";
import dayjs from "dayjs";

interface ExpenseCardProps {
  bills: bill[];
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ bills }) => {
  return (
    <div className="recent-transactions">
      <div className="header">
        <h3>Recent Transaction</h3> <button className="see-all">See All</button>
      </div>
      <div className="transactions-list">
        {bills.map((bill) => (
          <div key={bill._id} className="transaction-item">
            <div className={`icon-container`}>
              <ShoppingBag size={20} />
            </div>
            <div className="transaction-info">
              <div className="transaction-main">
                <span className="transaction-type">{bill.type}</span>
                <span className="transaction-amount">${bill.amount}</span>
              </div>
              <div className="transaction-details">
                <span className="transaction-description">
                  {bill.description}
                </span>
                <span className="transaction-time">
                  {dayjs(bill.date).format("YYYY/MM/DD")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
