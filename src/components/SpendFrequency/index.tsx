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
  // const billss: bill[] = [
  //   {
  //     _id: "1",
  //     amount: 100,
  //     type: 0,
  //     category: "Food",
  //     date: "2024-12-14T12:44:09.433+00:00",
  //     icon: "",
  //     createdBy: "user1",
  //   },
  //   {
  //     _id: "2",
  //     amount: 400,
  //     type: 0,
  //     category: "Travel",
  //     date: "2024-12-13T12:44:09.433+00:00",
  //     icon: "",
  //     createdBy: "user1",
  //   },
  //   {
  //     _id: "3",
  //     amount: 300,
  //     type: 0,
  //     category: "Shopping",
  //     date: "2024-12-12T12:44:09.433+00:00",
  //     icon: "",
  //     createdBy: "user1",
  //   },
  //   {
  //     _id: "4",
  //     amount: 700,
  //     type: 0,
  //     category: "Rent",
  //     date: "2024-12-11T12:44:09.433+00:00",
  //     icon: "",
  //     createdBy: "user1",
  //   },
  //   {
  //     _id: "5",
  //     amount: 200,
  //     type: 0,
  //     category: "Others",
  //     date: "2024-12-10T12:44:09.433+00:00",
  //     icon: "",
  //     createdBy: "user1",
  //   },
  // ];

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
