import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { loginUser, isLoading } = useLogin();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(form);
    if (success) {
      setForm({ email: "", password: "" });
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-sm p-9 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-11 h-11 rounded-full bg-orange-600 flex items-center justify-center text-white text-xl mx-auto mb-3">
            🍴
          </div>
          <h1 className="font-serif text-xl font-medium text-gray-900 mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500">Login to book your table</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="text-sm text-gray-600 block mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@company.com"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
          />

          <label className="text-sm text-gray-600 block mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-2"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-3 rounded-full text-sm font-medium hover:bg-orange-700 mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
