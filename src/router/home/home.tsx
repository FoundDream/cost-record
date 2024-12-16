import BalanceCard from "../../components/balanceCard";
import ExpenseCard from "../../components/expenseCard";
import "./home.less";
import { useEffect, useState } from "react";
import { getBillsInfo } from "../../api";
import { bill } from "../../api/getBillsInfo";

function Home() {
  const [bills, setBills] = useState<bill[]>([]);

  useEffect(() => {
    getBillsInfo().then((res) => {
      console.log(res);
      setBills(res.data.bills);
    });
  }, []);

  return (
    <div className="home">
      <div className="content">
        <BalanceCard bills={bills} />
        <ExpenseCard bills={bills} />
      </div>
    </div>
  );
}

export default Home;
