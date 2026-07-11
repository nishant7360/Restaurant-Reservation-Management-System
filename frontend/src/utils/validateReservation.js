const OPEN_TIME = "11:00";
const CLOSE_TIME = "23:00";

export function validateReservation(form) {
  const { reservationDate, startTime, endTime, guests } = form;
  const today = new Date().toISOString().split("T")[0];

  if (!reservationDate || !startTime || !endTime || !guests) {
    return "All fields are required";
  }
  if (startTime >= endTime) {
    return "End time must be after start time";
  }
  if (startTime < OPEN_TIME || endTime > CLOSE_TIME) {
    return "Reservations are only available between 11:00 AM and 11:00 PM";
  }
  if (guests <= 0) {
    return "Guests must be greater than 0";
  }
  if (new Date(reservationDate) < new Date(today)) {
    return "Reservation date cannot be in the past";
  }
  return "";
}
