import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "./authApi";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function loginUser(form) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await login(form.email, form.password);
      queryClient.setQueryData(["user"], data);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Logged In successfully");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { loginUser, isLoading, error };
}

export default useLogin;
