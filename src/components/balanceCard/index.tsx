import { FC } from "react";
import "./index.less";

interface BalanceCardProps {
  balance: number;
  expense: number;
  income: number;
}

const BalanceCard: FC<BalanceCardProps> = ({ balance, expense, income }) => {
  const expensePercentage = ((expense / income) * 100).toFixed(0);

  return (
    <div className="balance-card">
      <div className="balance-header">
        <div className="balance-title">收支盈余</div>
        <div className="balance-amout">
          <div>¥{balance.toFixed(2)}</div>
          <div className="balance-percentage">
            你花费了 {expensePercentage}% 的收入
          </div>
        </div>
      </div>
      <div className="balance-details">
        <div className="detail-item expense">
          <div className="icon">⬇️</div>
          <div>
            <div className="label">支出</div>
            <div className="amount">¥{expense.toFixed(2)}</div>
          </div>
        </div>
        <div className="detail-item income">
          <div className="icon">⬆️</div>
          <div>
            <div className="label">收入</div>
            <div className="amount">¥{income.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
