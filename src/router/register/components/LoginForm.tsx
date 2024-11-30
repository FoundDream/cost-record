import React, { useState } from "react";
import { postRequest } from "../../../utils/api";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 定义用户数据的接口
  interface User {
    id: number;
    name: string;
    token: string;
  }

  // 定义创建用户请求的数据结构
  interface CreateUserLogin {
    username: string;
    password: string;
  }

  // 定义响应结构
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  // 定义 createUser 函数的参数和返回类型
  const LoginUser = async (
    user: CreateUserLogin
  ): Promise<ApiResponse<User>> => {
    try {
      const response = await postRequest<User>("/user/login", user);
      console.log("Created user:", response.data);
      return response; // 返回响应数据
    } catch (error) {
      console.error("Failed to create user:", error);
      throw error; // 将错误抛出以便外部捕获
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    LoginUser({ username, password }).then((res) => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
