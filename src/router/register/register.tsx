import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

import "./register.less";

const LoginRegister: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Login
          </button>
          <button
            className={`tab-button ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Register
          </button>
        </div>
        {activeTab === 0 ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default LoginRegister;
