import React from "react";
import { Bell, ChevronDown, ArrowDown, ArrowUp } from "lucide-react";
import "./index.less";

interface FinanceDashboardProps {
  month?: string;
  balance?: number;
  income?: number;
  expenses?: number;
  avatarUrl?: string;
}

const BalanceCard: React.FC<FinanceDashboardProps> = ({
  month = "October",
  balance = 9400,
  income = 5000,
  expenses = 1200,
  avatarUrl = "https://gravatar.com/avatar/f656fc2a60e61ee1c1af65b89731ac9d?s=200&d=robohash&r=x",
}) => {
  return (
    <div className="finance-dashboard">
      <div className="header">
        <div className="user-section">
          <img src={avatarUrl} alt="User avatar" className="avatar" />
          <div className="month-selector">
            <ChevronDown size={20} />
            <span>{month}</span>
          </div>
        </div>
        <Bell className="notification-icon" size={24} />
      </div>

      <div className="balance-section">
        <span className="balance-label">Account Balance</span>
        <h1 className="balance-amount">${balance}</h1>
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
            <span className="stat-amount">${expenses}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
