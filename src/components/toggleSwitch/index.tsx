import React from "react";
import "./index.less";

interface ToggleSwitchProps {
  activeTab: "expense" | "income";
  onToggle: (tab: "expense" | "income") => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ activeTab, onToggle }) => {
  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${activeTab === "expense" ? "active" : ""}`}
        onClick={() => onToggle("expense")}
      >
        Expense
      </button>
      <button
        className={`toggle-button ${activeTab === "income" ? "active" : ""}`}
        onClick={() => onToggle("income")}
      >
        Income
      </button>
    </div>
  );
};

export default ToggleSwitch;
