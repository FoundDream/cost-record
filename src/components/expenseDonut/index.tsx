import React from "react";
import "./index.less";
import { ChevronDown } from "lucide-react";

const ExpenseDonut: React.FC = () => {
  // Calculate the circle's circumference
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  // Example data (percentages should add up to 100)
  const segments = [
    { percent: 50, color: "#FFA500" }, // Orange
    { percent: 35, color: "#8A2BE2" }, // Purple
    { percent: 15, color: "#FF4757" }, // Red
  ];

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  let currentOffset = 0;
  const segmentPaths = segments.map((segment) => {
    const dashLength = (segment.percent / 100) * circumference;
    const gap = 3; // Gap size for rounded corners
    const path = {
      strokeDasharray: `${dashLength - gap} ${circumference}`,
      strokeDashoffset: -currentOffset,
      stroke: segment.color,
    };
    currentOffset += dashLength;
    return path;
  });

  return (
    <div className="expense-donut">
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
        <div className="header-icons">
          <button className="icon-button">
            <svg viewBox="0 0 24 24" className="share-icon">
              <path
                d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button className="icon-button chart">
            <svg viewBox="0 0 24 24" className="chart-icon">
              <path
                d="M12 2v20M2 12h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="donut-container">
        <svg viewBox="-100 -100 200 200" className="donut">
          {segmentPaths.map((path, index) => (
            <circle
              key={index}
              r={radius}
              fill="none"
              strokeWidth="30"
              strokeLinecap="round"
              style={path}
              className="donut-segment"
            />
          ))}
        </svg>
        <div className="donut-content">
          <span className="amount">$332</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDonut;
