import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Logger from "./log";

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // 替换为实际的基础 URL
  timeout: 10000, // 设置超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以添加授权 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    Logger.log(`发起接口请求: ${config.url}`);
    return config;
  },
  (error) => {
    // 请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    Logger.log(`接口请求成功: ${response.config.url}`, {
      status: response.status,
    });
    return response.data; // 只返回数据部分，简化调用
  },
  (error) => {
    // 处理错误
    if (error.response) {
      Logger.error(`接口请求出错，状态码: ${error.response.status}`, {
        status: error.response.status,
      });
    } else {
      Logger.error("网络错误");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
