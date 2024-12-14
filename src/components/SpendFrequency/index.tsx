import React, { useState } from "react";
import "./index.less";

type TimeRange = "Today" | "Week" | "Month" | "Year";

const SpendFrequency: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<TimeRange>("Today");

  const timeRanges: TimeRange[] = ["Today", "Week", "Month", "Year"];

  return (
    <div className="spend-frequency">
      <h2 className="title">Spend Frequency</h2>

      <div className="graph">
        <svg viewBox="0 0 400 100" className="curve">
          <path
            d="M0,50 C50,30 100,70 150,40 C200,10 250,60 300,20 C350,80 400,30 400,50"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="time-ranges">
        {timeRanges.map((range) => (
          <button
            key={range}
            className={`range-button ${
              selectedRange === range ? "active" : ""
            }`}
            onClick={() => setSelectedRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpendFrequency;
