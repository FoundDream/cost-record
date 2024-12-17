import { useState } from "react";
import "./index.less";
import SmoothLineChart from "../chart";
import { bill } from "../../api/getBillsInfo";
interface SpendFrequencyProps {
  bills: bill[];
}
type TimeRange = "Today" | "Week" | "Month" | "Year";
const SpendFrequency: React.FC<SpendFrequencyProps> = ({ bills }) => {
  bills = bills.filter((bill) => bill.type === 0);

  const [selectedRange, setSelectedRange] = useState<TimeRange>("Today");
  const timeRanges: TimeRange[] = ["Today", "Week", "Month", "Year"];
  return (
    <div className="spend-frequency">
      <h2 className="title">Spend Frequency</h2>
      <div className="graph">
        <div>
          <SmoothLineChart data={bills} height={250} />
        </div>
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
