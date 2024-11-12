/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./request";

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// GET 请求
export const getRequest = async <T>(
  url: string,
  params = {}
): Promise<ApiResponse<T>> => {
  return axiosInstance.get(url, { params });
};

// POST 请求
export const postRequest = async <T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> => {
  return axiosInstance.post(url, data);
};

// PUT 请求
export const putRequest = async <T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> => {
  return axiosInstance.put(url, data);
};

// DELETE 请求
export const deleteRequest = async <T>(
  url: string
): Promise<ApiResponse<T>> => {
  return axiosInstance.delete(url);
};
