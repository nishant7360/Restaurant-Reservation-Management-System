import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "./authApi";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  async function signupUser(form) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await register(form.name, form.email, form.password);
      toast.success("Account created! Successfully");
      navigate("/");
      return true;
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Registration failed");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return { signupUser, isLoading, error };
}

export default useRegister;
