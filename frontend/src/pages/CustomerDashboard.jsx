import {
  useReservations,
  useCancelReservation,
} from "../features/reservation/useReservations";
import ReservationGrid from "../components/ReservationGrid";

function CustomerDashboard() {
  const { data: reservations, isLoading, isError } = useReservations();
  const { mutate: cancel, isPending, variables } = useCancelReservation();

  if (isLoading) {
    return (
      <div className="text-center py-16 text-gray-500 text-sm">
        Loading your reservations...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-16 text-red-500 text-sm">
        Something went wrong. Please try again.
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="font-serif text-2xl font-medium text-gray-900 mb-6">
        My Reservations
      </h1>
      <ReservationGrid
        reservations={reservations}
        onCancel={cancel}
        cancellingId={isPending ? variables : null}
      />
    </div>
  );
}

export default CustomerDashboard;
