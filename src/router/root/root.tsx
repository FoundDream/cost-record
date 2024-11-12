import { TabBar } from "antd-mobile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./root.less";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoPieChartOutline, IoPieChartSharp } from "react-icons/io5";
import { RiUser4Fill, RiUser4Line } from "react-icons/ri";
import { useEffect, useState } from "react";

function Root() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("home");

  const location = useLocation();

  useEffect(() => {
    setActiveKey(location.pathname.slice(1));
  }, [location]);

  const tabs = [
    {
      key: "home",
      title: "首页",
      icon: (active: boolean) => (active ? <GoHomeFill /> : <GoHome />),
    },
    {
      key: "statistics",
      title: "统计",
      icon: (active: boolean) =>
        active ? <IoPieChartSharp /> : <IoPieChartOutline />,
    },
    {
      key: "user",
      title: "我的",
      icon: (active: boolean) => (active ? <RiUser4Fill /> : <RiUser4Line />),
    },
  ];

  return (
    <>
      <div className="tab-bar">
        <TabBar
          onChange={(activeKey: string) => navigate(activeKey)}
          activeKey={activeKey}
        >
          {tabs.map((item) => (
            <TabBar.Item icon={item.icon} key={item.key} />
          ))}
        </TabBar>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
