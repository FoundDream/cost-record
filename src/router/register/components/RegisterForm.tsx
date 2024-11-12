import React, { useState } from "react";
import { postRequest } from "../../../utils/api";

export const RegisterForm: React.FC = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  // 定义用户数据的接口
  interface User {
    id: number;
    name: string;
  }

  // 定义创建用户请求的数据结构
  interface CreateUserRequest {
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
  const createUser = async (
    user: CreateUserRequest
  ): Promise<ApiResponse<User>> => {
    try {
      const response = await postRequest<User>("/user/register", user);
      console.log("Created user:", response.data);
      return response; // 返回响应数据
    } catch (error) {
      console.error("Failed to create user:", error);
      throw error; // 将错误抛出以便外部捕获
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createUser({ username, password });
    console.log("Registering with:", { username, password }, res, "success");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
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
        Register
      </button>
    </form>
  );
};
