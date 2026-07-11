const STATUS_STYLES = {
  Booked: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Completed: "bg-gray-100 text-gray-600",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(time24) {
  const [h, m] = time24.split(":");
  const hour = ((+h + 11) % 12) + 1;
  const period = +h >= 12 ? "PM" : "AM";
  return `${hour}:${m} ${period}`;
}

function ReservationCard({ reservation, onCancel, isCancelling }) {
  const { table, reservationDate, startTime, endTime, guests, status } =
    reservation;
  const isCancellable = status === "Booked";

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-3.5">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Table</p>
          <p className="text-[17px] font-medium text-gray-900">
            Table {table.tableNumber}{" "}
            <span className="text-xs text-gray-400 font-normal">
              (seats {table.capacity})
            </span>
          </p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[status] || "bg-gray-100 text-gray-600"}`}
        >
          {status}
        </span>
      </div>

      <div className="flex gap-4 mb-2.5 text-sm text-gray-600">
        <span>📅 {formatDate(reservationDate)}</span>
        <span>
          🕐 {formatTime(startTime)} – {formatTime(endTime)}
        </span>
      </div>

      <div className="text-sm text-gray-600 mb-4">👥 {guests} guests</div>

      <button
        onClick={() => onCancel(reservation._id)}
        disabled={!isCancellable || isCancelling}
        className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors ${
          isCancellable
            ? "bg-white border border-red-300 text-red-600 hover:bg-red-50 disabled:opacity-60"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isCancelling
          ? "Cancelling..."
          : isCancellable
            ? "Cancel reservation"
            : status}
      </button>
    </div>
  );
}

export default ReservationCard;
