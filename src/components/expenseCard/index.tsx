import React from "react";
import "./index.less";

interface ExpenseCardProps {
  date: string;
  amount: number;
  category: string;
  icon: React.ReactNode;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  date,
  amount,
  category,
  icon,
}) => {
  return (
    <div className="expense-card">
      <div className="expense-header">
        <span className="expense-date">今天 {date}</span>
        <span className="expense-amount">支 ¥{amount.toFixed(2)}</span>
      </div>
      <div className="expense-details">
        <div className="expense-item">
          <div className="icon">{icon}</div>
          <div className="label">{category}</div>
        </div>
        <div className="amount">-¥{amount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
