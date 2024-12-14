import React from "react";
import { Pencil, Wallet, Settings, Upload, LogOut } from "lucide-react";
import "./index.less";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isDanger?: boolean;
}

const ProfileSettings: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      icon: <Wallet size={24} />,
      label: "Account",
      onClick: () => console.log("Account clicked"),
    },
    {
      icon: <Settings size={24} />,
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
    {
      icon: <Upload size={24} />,
      label: "Export Data",
      onClick: () => console.log("Export clicked"),
    },
    {
      icon: <LogOut size={24} />,
      label: "Logout",
      onClick: () => console.log("Logout clicked"),
      isDanger: true,
    },
  ];

  return (
    <div className="profile-settings-container">
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img
            src="https://gravatar.com/avatar/f656fc2a60e61ee1c1af65b89731ac9d?s=200&d=robohash&r=x"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-info">
          <span className="label">Username</span>
          <h2 className="name">Iriana Saliha</h2>
        </div>
        <button className="edit-button">
          <Pencil size={20} />
        </button>
      </div>

      <div className="menu-list">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`menu-item ${item.isDanger ? "danger" : ""}`}
            onClick={item.onClick}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSettings;
