import React from "react";
import {
  PieChart,
  BarChart,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Wallet,
} from "lucide-react";
import "./index.less";

const StatisticsPage: React.FC = () => {
  return (
    <div className="statistics-container">
      <h1 className="page-title">财务统计</h1>

      <div className="overview-cards">
        <div className="stat-card">
          <div className="stat-icon income">
            <ArrowUpRight size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">总收入</span>
            <span className="stat-value">¥15,230</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon expense">
            <ArrowDownRight size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">总支出</span>
            <span className="stat-value">¥10,580</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon balance">
            <Wallet size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">结余</span>
            <span className="stat-value">¥4,650</span>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-card">
          <h2 className="chart-title">支出分类</h2>
          <div className="chart-icon">
            <PieChart size={24} />
          </div>
          <div className="chart-placeholder">这里将显示支出分类饼图</div>
        </div>
        <div className="chart-card">
          <h2 className="chart-title">月度收支趋势</h2>
          <div className="chart-icon">
            <BarChart size={24} />
          </div>
          <div className="chart-placeholder">这里将显示月度收支柱状图</div>
        </div>
      </div>

      <div className="budget-section">
        <h2 className="section-title">预算概览</h2>
        <div className="budget-card">
          <div className="budget-icon">
            <DollarSign size={24} />
          </div>
          <div className="budget-info">
            <span className="budget-label">本月预算</span>
            <span className="budget-value">¥12,000</span>
          </div>
          <div className="budget-progress">
            <div className="progress-bar" style={{ width: "88%" }}></div>
          </div>
          <span className="budget-status">已使用 88%</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
