import { AUTH_TOKEN } from "@/utils/constants";
import { ApiService } from "./ApiService";
import { API_ENDPOINTS } from "@/api/endpoints";
import { LoginApiRequestData, LoginApiResponseData } from "@/interfaces/auth";

class AuthService {
  static async login(mobile: string, password: string) {
    const response = await ApiService.post<LoginApiResponseData>(
      API_ENDPOINTS.AUTH.LOGIN,
      {
        mobile,
        password,
      } as LoginApiRequestData
    );
    if(response === undefined) {
      // Handle error
      return;
    }
    localStorage.setItem(AUTH_TOKEN, response.token);
  }

  static logout() {
    localStorage.removeItem(AUTH_TOKEN);
  }

  static isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) !== null;
  }
}

export { AuthService };
