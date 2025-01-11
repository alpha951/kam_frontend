import { UserRoles } from "@/types/types";
import exp from "constants";

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'info';
    message: string;
  }>;
}

export interface User {
      userId: string;
      name: string;
      mobile: string;
      role: UserRoles;
      email: string;
}
