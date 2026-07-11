import { useState } from "react";
import { useAllReservations } from "../features/admin/useAllReservations";
import { useCancelReservationAdmin } from "../features/admin/useCancelReservationAdmin";
import AdminReservationTable from "../features/admin/AdminReservationTable";
import EditReservationModal from "../features/admin/EditReservationModal";
import DateFilter from "../components/DateFilter";

function AdminReservationsPage() {
  const [date, setDate] = useState("");
  const [editingReservation, setEditingReservation] = useState(null);
  const { data: reservations, isLoading, isError } = useAllReservations(date);
  const {
    mutate: cancel,
    isPending,
    variables: cancellingId,
  } = useCancelReservationAdmin();

  return (
    <div className="px-8 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-medium text-gray-900">
          Reservations
        </h1>
        <DateFilter value={date} onChange={setDate} />
      </div>

      {isLoading && (
        <p className="text-center text-gray-500 text-sm py-16">
          Loading reservations...
        </p>
      )}
      {isError && (
        <p className="text-center text-red-500 text-sm py-16">
          Something went wrong.
        </p>
      )}

      {!isLoading && !isError && (
        <AdminReservationTable
          reservations={reservations}
          onCancel={cancel}
          onEdit={setEditingReservation}
          cancellingId={isPending ? cancellingId : null}
        />
      )}

      {editingReservation && (
        <EditReservationModal
          reservation={editingReservation}
          onClose={() => setEditingReservation(null)}
        />
      )}
    </div>
  );
}

export default AdminReservationsPage;
