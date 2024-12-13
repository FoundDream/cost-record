import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

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
    return response.data; // 只返回数据部分，简化调用
  },
  (error) => {
    // 处理错误
    if (error.response) {
      console.error(`Error: ${error.response.status}`, error.response.data);
    } else {
      console.error("Network Error", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
