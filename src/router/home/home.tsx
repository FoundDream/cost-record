import BalanceCard from "../../components/balanceCard";
import ExpenseCard from "../../components/expenseCard";
import "./home.less";
import SpendFrequency from "../../components/SpendFrequency";

function Home() {
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
