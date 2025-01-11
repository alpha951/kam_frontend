import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {User} from "../interfaces/auth";

// not using this code anywhere. Should this be moved to store dir?
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (!token) {
      setLoading(false);
      return;
    }
    // Here you would typically validate the token with your backend
    // and fetch user data
  }, []);

  const login = async (mobile: string, password: string) => {
    // Implement login logic
  };

  const logout = () => {
    localStorage.removeItem("jwt_token");
    setUser(null);
    navigate("/login");
  };

  return { user, loading, login, logout };
};
