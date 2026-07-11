import { STATUS_STYLES } from "./statusStyles";

function ReservationStatusBadge({ status }) {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}

export default ReservationStatusBadge;
