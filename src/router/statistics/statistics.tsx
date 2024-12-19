import { useState } from "react";
import CategoryList from "../../components/categoryList";
import ExpenseDonut from "../../components/expenseDonut";
// import StatisticsPage from "../../components/StatisticsPage";
import ToggleSwitch from "../../components/toggleSwitch";
import "./statisitcs.less";
function Statistics() {
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");
  return (
    <div className="statistics">
      <div className="content">
        <ExpenseDonut />
        <ToggleSwitch activeTab={activeTab} onToggle={setActiveTab} />
        <CategoryList />
        {/* <StatisticsPage /> */}
      </div>
    </div>
  );
}

export default Statistics;
