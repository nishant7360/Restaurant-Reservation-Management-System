import ReservationCard from "./ReservationCard";

function ReservationGrid({ reservations, onCancel, cancellingId }) {
  if (!reservations?.length) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-sm">
          You don't have any reservations yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {reservations.map((r) => (
        <ReservationCard
          key={r._id}
          reservation={r}
          onCancel={onCancel}
          isCancelling={cancellingId === r._id}
        />
      ))}
    </div>
  );
}

export default ReservationGrid;
