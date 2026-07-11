import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white text-3xl mx-auto mb-5">
          🍽️
        </div>
        <p className="font-serif text-6xl font-semibold text-gray-900 leading-none">
          404
        </p>
        <h1 className="font-serif text-xl font-medium text-gray-900 mt-3 mb-2">
          This table isn't set
        </h1>
        <p className="text-sm text-gray-500 max-w-xs mx-auto mb-7">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-orange-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-orange-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
