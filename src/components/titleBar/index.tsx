import { FC } from "react";
import "./index.less";

interface TitleBarProps {
  hasBackground: boolean;
}

const TitleBar: FC<TitleBarProps> = ({ hasBackground }) => {
  return (
    <div className={`title-bar ${hasBackground ? "scrolled" : ""}`}>
      <h1 className="title">账本</h1>
    </div>
  );
};

export default TitleBar;
