import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "./useRegister";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { signupUser, isLoading, error } = useRegister();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signupUser(form);
    if (success) {
      setForm({ name: "", email: "", password: "" });
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
            Create account
          </h1>
          <p className="text-sm text-gray-500">
            Join us for a delicious experience
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="text-sm text-gray-600 block mb-1.5">
            Full name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Maya Rodriguez"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
          />

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
            placeholder="Create a password"
            required
            minLength={6}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-5"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-3 rounded-full text-sm font-medium hover:bg-orange-700 mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
