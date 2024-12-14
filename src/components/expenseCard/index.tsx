import React from "react";
import { ShoppingBag, FileText, Utensils } from "lucide-react";
import "./index.less";

interface Transaction {
  id: number;
  type: "Shopping" | "Subscription" | "Food";
  description: string;
  amount: number;
  time: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: "Shopping",
    description: "Buy some grocery",
    amount: -120,
    time: "10:00 AM",
  },
  {
    id: 2,
    type: "Subscription",
    description: "Disney+ Annual..",
    amount: -80,
    time: "03:30 PM",
  },
  {
    id: 3,
    type: "Food",
    description: "Buy a ramen",
    amount: -32,
    time: "07:30 PM",
  },
  {
    id: 4,
    type: "Food",
    description: "Buy a ramen",
    amount: -32,
    time: "07:30 PM",
  },
  {
    id: 5,
    type: "Food",
    description: "Buy a ramen",
    amount: -32,
    time: "07:30 PM",
  },
];

const getIcon = (type: Transaction["type"]) => {
  switch (type) {
    case "Shopping":
      return <ShoppingBag size={20} />;
    case "Subscription":
      return <FileText size={20} />;
    case "Food":
      return <Utensils size={20} />;
  }
};

const getIconBackground = (type: Transaction["type"]) => {
  switch (type) {
    case "Shopping":
      return "bg-orange";
    case "Subscription":
      return "bg-purple";
    case "Food":
      return "bg-pink";
  }
};

const ExpenseCard: React.FC = () => {
  return (
    <div className="recent-transactions">
      <div className="header">
        <h3>Recent Transaction</h3> <button className="see-all">See All</button>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div
              className={`icon-container ${getIconBackground(
                transaction.type
              )}`}
            >
              {getIcon(transaction.type)}
            </div>
            <div className="transaction-info">
              <div className="transaction-main">
                <span className="transaction-type">{transaction.type}</span>
                <span className="transaction-amount">
                  ${transaction.amount}
                </span>
              </div>
              <div className="transaction-details">
                <span className="transaction-description">
                  {transaction.description}
                </span>
                <span className="transaction-time"> {transaction.time} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
