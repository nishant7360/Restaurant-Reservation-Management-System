import ReservationStatusBadge from "../../components/ReservationStatusBadge";
import { formatDateTime } from "../../components/statusStyles";

function AdminReservationRow({ reservation, onCancel, onEdit, isCancelling }) {
  const {
    customer,
    table,
    reservationDate,
    startTime,
    endTime,
    guests,
    status,
  } = reservation;
  const isActionable = status === "Booked";

  return (
    <tr className="border-t border-gray-100">
      <td className="px-4 py-3.5">
        <p className="text-sm font-medium text-gray-900">{customer?.name}</p>
        <p className="text-xs text-gray-400">{customer?.email}</p>
      </td>
      <td className="px-4 py-3.5 text-sm text-gray-600">
        Table {table.tableNumber} ({table.capacity})
      </td>
      <td className="px-4 py-3.5 text-sm text-gray-600">
        {formatDateTime(reservationDate, startTime, endTime)}
      </td>
      <td className="px-4 py-3.5 text-sm text-gray-600">{guests}</td>
      <td className="px-4 py-3.5">
        <ReservationStatusBadge status={status} />
      </td>
      <td className="px-4 py-3.5 text-right">
        {isActionable ? (
          <div className="flex justify-end gap-1.5">
            <button
              onClick={() => onEdit(reservation)}
              className="bg-white text-gray-700 border border-gray-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-50"
            >
              Edit
            </button>
            <button
              onClick={() => onCancel(reservation._id)}
              disabled={isCancelling}
              className="bg-white text-red-600 border border-red-300 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-red-50 disabled:opacity-60"
            >
              {isCancelling ? "Cancelling..." : "Cancel"}
            </button>
          </div>
        ) : (
          <span className="text-xs text-gray-300">No actions</span>
        )}
      </td>
    </tr>
  );
}

export default AdminReservationRow;
