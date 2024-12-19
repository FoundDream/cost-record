import React from "react";
import "./index.less";

interface Category {
  name: string;
  amount: number;
  color: string;
  percentage: number;
}

const categories: Category[] = [
  { name: "Shopping", amount: 120, color: "#FFA500", percentage: 100 },
  { name: "Subcription", amount: 80, color: "#8B5CF6", percentage: 66 },
  { name: "Food", amount: 32, color: "#FF4757", percentage: 25 },
];

const CategoryList: React.FC = () => {
  return (
    <div className="category-list">
      <div className="category-header">
        <button className="category-dropdown">
          <span>Category</span>
          <svg viewBox="0 0 24 24" className="chevron-icon">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className="sort-button">
          <svg viewBox="0 0 24 24" className="sort-icon">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <div className="category-items">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-info">
              <div
                className="category-dot"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="category-name">{category.name}</span>
              <span className="category-amount">- ${category.amount}</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar"
                style={{
                  width: `${category.percentage}%`,
                  backgroundColor: category.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
