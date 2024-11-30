import { useEffect, useRef, useState } from "react";
import BalanceCard from "../../components/balanceCard";
import ExpenseCard from "../../components/expenseCard";
import TitleBar from "../../components/titleBar";
import "./home.less";
import { getRequest } from "../../utils/api";

function Home() {
  interface Bill {
    totalExpense: number;
    totalIncome: number;
    list: any[];
  }

  const [hasScrolled, setHasScrolled] = useState(false);
  const [data, setData] = useState<Bill>({
    totalExpense: 0,
    totalIncome: 0,
    list: [],
  });
  const contentElement = useRef<HTMLDivElement | null>(null);

  // 检查滚动位置，处理titlebar样式
  const handleScroll = () => {
    if (contentElement.current && contentElement.current.scrollTop > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    init();
    // 添加滚动事件监听器
    if (contentElement.current) {
      contentElement.current.addEventListener("scroll", handleScroll);
      // 卸载时移除滚动事件监听器
      return () => {
        if (contentElement.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          contentElement.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  const init = async () => {
    const bill = await getRequest<Bill>("/bill/list", {
      date: "2024-11",
      page: 1,
    });
    setData(bill.data);
    console.log(bill);
  };

  return (
    <div className="home">
      <TitleBar hasBackground={hasScrolled} />
      <div className="content" ref={contentElement}>
        <BalanceCard
          balance={data.totalIncome - data.totalExpense}
          expense={data.totalExpense}
          income={data.totalIncome}
        />

        <ExpenseCard
          date="星期日"
          amount={20.9}
          category="Food"
          icon={
            <span role="img" aria-label="food">
              🍴
            </span>
          }
        />
      </div>
    </div>
  );
}

export default Home;
