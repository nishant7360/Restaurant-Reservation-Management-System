import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-white text-lg">
          🍴
        </div>
        <Link to="/" className="text-xl font-serif font-medium text-gray-900">
          Bella Cucina
        </Link>
      </div>
      {isAuthenticated ? (
        <div className="relative group">
          <button className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-sm font-medium cursor-pointer">
            {user.name?.[0]?.toUpperCase()}
          </button>

          <div className="absolute right-0 top-full h-2 w-full" />

          <div
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-gray-100 shadow-lg py-1.5
                       opacity-0 invisible translate-y-1
                       group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                       transition-all duration-150 z-50"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            <Link
              to={"/dashboard"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
            >
              {isAdmin ? "Dashboard" : "My reservations"}
            </Link>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Link
          to="/login"
          className="px-6 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
        >
          Login
        </Link>
      )}
    </header>
  );
}

export default Header;
