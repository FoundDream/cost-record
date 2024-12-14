import BalanceCard from "../../components/balanceCard";
import ExpenseCard from "../../components/expenseCard";
import "./home.less";
import SpendFrequency from "../../components/SpendFrequency";
import { useEffect } from "react";
import { getRequest } from "../../utils/api";

function Home() {
  useEffect(() => {
    getRequest("/api/v1/bills").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="home">
      <div className="content">
        <BalanceCard />
        <SpendFrequency />
        <ExpenseCard />
      </div>
    </div>
  );
}

export default Home;
