export const STATUS_STYLES = {
  Booked: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Completed: "bg-gray-100 text-gray-600",
};

export function formatDateTime(reservationDate, startTime, endTime) {
  const date = new Date(reservationDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return `${date} · ${formatTime(startTime)}–${formatTime(endTime)}`;
}

export function formatTime(time24) {
  const [h, m] = time24.split(":");
  const hour = ((+h + 11) % 12) + 1;
  const period = +h >= 12 ? "PM" : "AM";
  return `${hour}:${m} ${period}`;
}
