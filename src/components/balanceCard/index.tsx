import React, { useMemo } from "react";
import { Bell, ChevronDown, ArrowDown, ArrowUp } from "lucide-react";
import "./index.less";
import { bill } from "../../api/getBillsInfo";

interface BalanceCardProps {
  bills: bill[];
}

const BalanceCard: React.FC<BalanceCardProps> = ({ bills }) => {
  const { income, expense } = useMemo(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    bills.forEach((bill) => {
      if (bill.type === 1) {
        totalIncome += bill.amount;
      } else {
        totalExpense += bill.amount;
      }
    });
    return { income: totalIncome, expense: totalExpense };
  }, [bills]);

  return (
    <div className="finance-dashboard">
      <div className="header">
        <div className="user-section">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="User avatar"
            className="avatar"
          />
          <div className="month-selector">
            <ChevronDown size={20} />
            <span>{"October"}</span>
          </div>
        </div>
        <Bell className="notification-icon" size={24} />
      </div>

      <div className="balance-section">
        <span className="balance-label">Account Balance</span>
        <h1 className="balance-amount">${income - expense}</h1>
      </div>

      <div className="stats-container">
        <div className="stat-card income">
          <div className="stat-icon">
            <ArrowDown size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Income</span>
            <span className="stat-amount">${income}</span>
          </div>
        </div>

        <div className="stat-card expenses">
          <div className="stat-icon">
            <ArrowUp size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Expenses</span>
            <span className="stat-amount">${expense}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
