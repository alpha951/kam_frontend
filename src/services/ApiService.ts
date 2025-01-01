import axios, { AxiosError } from "axios";
import axiosInstance from "../api/axios";
import { ApiResponse } from "@/interfaces/apiresponse";
import { ApiError } from "@/interfaces/ApiError";

export class ApiService {
  static async get<T>(url: string) {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  }

  static async post<T>(url: string, data: any): Promise<T | undefined> {
    try {
      const res = await axiosInstance.post<ApiResponse<T>>(url, data);
      const response = res.data;

      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.error?.toString() || "Unknown error");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleError(error);
        console.error("Axios error:", error.response?.data);
      } else {
        console.error("Error:", error);
      }
      return undefined;
    }
  }

  private static handleError(error: AxiosError): ApiError {
    return {
      message: error.response?.data?.message || "An unexpected error occurred",
      status: error.response?.status || 500,
      errors: error.response?.data?.errors,
    };
  }
}
