import { useState } from "react";
import "./register.less";
import { postRequest } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  interface LoginResponse {
    user: {
      username: string;
      email: string;
    };
    token: string;
  }

  interface RegisterResponse {
    user: {
      username: string;
      email: string;
      id: number;
    };
  }

  // 注册状态
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 登录状态
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // 注册提交处理
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await postRequest<RegisterResponse>(
      "/api/v1/user/register",
      {
        username,
        email,
        password,
      }
    );
    setActiveTab("login");
    setUsername("");
    setEmail("");
    setPassword("");
    console.log(data, "注册成功");
    const bill = await postRequest("/api/v1/bills", {
      name: "测试记账本",
      description: "测试",
      icon: "",
      userId: data.user.id,
    });
    console.log(bill, "bill");
  };

  // 登录提交处理
  const handleLoginSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await postRequest<LoginResponse>("/api/v1/user/login", {
        username: loginUsername,
        password: loginPassword,
      });
      setLoginUsername("");
      setLoginPassword("");
      navigate("/");
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  const handleTabChange = (tab: "register" | "login") => {
    setActiveTab(tab);
  };

  return (
    <div className="register-container">
      <div className="toggle-container">
        <button
          className={`toggle-button ${
            activeTab === "register" ? "active" : ""
          }`}
          onClick={() => handleTabChange("register")}
        >
          注册
        </button>
        <button
          className={`toggle-button ${activeTab === "login" ? "active" : ""}`}
          onClick={() => handleTabChange("login")}
        >
          登录
        </button>
      </div>

      {activeTab === "register" ? (
        <>
          <h1 className="title">注册</h1>
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="input"
                placeholder="用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                className="input"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-button">
              注册
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="title">登录</h1>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="input"
                placeholder="用户名"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input"
                placeholder="密码"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              登录
            </button>
          </form>
        </>
      )}
    </div>
  );
}
