import { AuthService } from "@/services/AuthService";
import { Navigate, Outlet } from "react-router-dom";

export function AuthLayout() {
  const isAuthenticated = AuthService.isAuthenticated();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-300 flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <Outlet />
      </div>  
    </div>
  );
}
