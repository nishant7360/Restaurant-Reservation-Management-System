import { createContext, useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../features/auth/authApi.js";
import useGetMe from "../features/auth/useGetUser";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const { user, isLoading } = useGetMe();

  async function logout() {
    await logoutApi();
    queryClient.setQueryData(["user"], null);
    await queryClient.invalidateQueries({ queryKey: ["user"] });
  }

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.userType === "admin",
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
