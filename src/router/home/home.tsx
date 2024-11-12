/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import BalanceCard from "../../components/balanceCard";
import ExpenseCard from "../../components/expenseCard";
import TitleBar from "../../components/titleBar";
import "./home.less";
import throttle from "../../utils/throttle";

function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const contentElement = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    console.log();
    // 检查滚动位置，如果滚动距离超过0，设置 hasScrolled 为 true
    if (contentElement.current && contentElement.current.scrollTop > 0) {
      console.log("---");
      setHasScrolled(true);
    } else {
      console.log("---");

      setHasScrolled(false);
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 0);

  useEffect(() => {
    console.log(contentElement);
    // 添加滚动事件监听器
    if (contentElement.current) {
      contentElement.current.addEventListener("scroll", throttleHandleScroll);
      console.log("---");
      // 卸载时移除滚动事件监听器
      return () => {
        if (contentElement.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          contentElement.current.removeEventListener(
            "scroll",
            throttleHandleScroll
          );
        }
      };
    }
  }, []);

  return (
    <div className="home">
      <TitleBar hasBackground={hasScrolled} />
      <div className="content" ref={contentElement}>
        <BalanceCard balance={3228.32} expense={2911.68} income={6140.0} />
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
