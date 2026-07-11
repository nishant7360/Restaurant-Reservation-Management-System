import { Link, useNavigate } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";
import { Clock } from "lucide-react";
import { UsersRound } from "lucide-react";

function BookReservation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to dashboard
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 pt-6 grid grid-cols-1 md:grid-cols-[1fr_420px] gap-10 items-start">
        <div className="pt-6">
          <p className="text-orange-600 text-xs font-medium uppercase tracking-wide mb-2.5">
            Reservation
          </p>
          <h1 className="font-serif text-3xl font-medium text-gray-900 mb-3">
            Book your table
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-7">
            Tell us when you'd like to dine and how many are joining — we'll
            match you with the best available table.
          </p>

          <div className="flex gap-3 mb-4">
            <span className="text-lg">
              <Clock />
            </span>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-0.5">
                Open daily
              </p>
              <p className="text-xs text-gray-400">11:00 AM – 11:00 PM</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-lg">
              {" "}
              <UsersRound />{" "}
            </span>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-0.5">
                Any party size
              </p>
              <p className="text-xs text-gray-400">
                We'll seat you at the right table
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <ReservationForm onSuccess={() => navigate("/dashboard")} />
        </div>
      </div>
    </div>
  );
}

export default BookReservation;
