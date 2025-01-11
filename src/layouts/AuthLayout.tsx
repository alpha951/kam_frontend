import { AuthService } from "@/services/AuthService";
import { Navigate, Outlet } from "react-router-dom";

export function AuthLayout() {
  const isAuthenticated = AuthService.isAuthenticated();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
        <Outlet />
  );
}
