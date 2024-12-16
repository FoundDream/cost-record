import { useState } from "react";
import "./index.less";
import SmoothLineChart from "../chart";
import { bill } from "../../api/getBillsInfo";

type TimeRange = "Today" | "Week" | "Month" | "Year";
const SpendFrequency: React.FC = () => {
  const billss: bill[] = [
    {
      _id: "1",
      amount: 100,
      type: 0,
      category: "Food",
      date: new Date(),
      icon: "",
      createdBy: "user1",
    },
    {
      _id: "2",
      amount: 400,
      type: 0,
      category: "Travel",
      date: new Date(),
      icon: "",
      createdBy: "user1",
    },
    {
      _id: "3",
      amount: 300,
      type: 0,
      category: "Shopping",
      date: new Date(),
      icon: "",
      createdBy: "user1",
    },
    {
      _id: "4",
      amount: 700,
      type: 0,
      category: "Rent",
      date: new Date(),
      icon: "",
      createdBy: "user1",
    },
    {
      _id: "5",
      amount: 200,
      type: 0,
      category: "Others",
      date: new Date(),
      icon: "",
      createdBy: "user1",
    },
  ];

  const [selectedRange, setSelectedRange] = useState<TimeRange>("Today");
  const timeRanges: TimeRange[] = ["Today", "Week", "Month", "Year"];
  return (
    <div className="spend-frequency">
      <h2 className="title">Spend Frequency</h2>
      <div className="graph">
        <div>
          <SmoothLineChart data={billss} height={250} />
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
