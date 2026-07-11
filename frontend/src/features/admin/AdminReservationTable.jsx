import AdminReservationRow from "./AdminReservationRow";

function AdminReservationTable({
  reservations,
  onCancel,
  onEdit,
  cancellingId,
}) {
  if (!reservations?.length) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center">
        <p className="text-gray-500 text-sm">No reservations found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden overflow-x-auto">
      <table className="w-full border-collapse min-w-[720px]">
        <thead>
          <tr className="bg-gray-50">
            {[
              "Customer",
              "Table",
              "Date & Time",
              "Guests",
              "Status",
              "Actions",
            ].map((h) => (
              <th
                key={h}
                className={`px-4 py-3 text-xs font-medium text-gray-500 uppercase ${h === "Actions" ? "text-right" : "text-left"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <AdminReservationRow
              key={r._id}
              reservation={r}
              onCancel={onCancel}
              onEdit={onEdit}
              isCancelling={cancellingId === r._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminReservationTable;
