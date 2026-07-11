import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export async function getAllReservations() {
  try {
    const responnse = await axios.get(`${BASE_URL}/reservations/my`, {
      withCredentials: true,
    });
    return responnse.data.data;
  } catch (error) {
    console.log("Get all reservation error", error);
    throw new Error(error.message);
  }
}

export async function cancelReservation(id) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/reservations/my/${id}/cancel`,
      {},
      { withCredentials: true },
    );
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to cancel reservation",
    );
  }
}

export async function createReservation({
  reservationDate,
  startTime,
  endTime,
  guests,
}) {
  try {
    const response = await axios.post(
      `${BASE_URL}/reservations/reserve-table`,
      { reservationDate, startTime, endTime, guests },
      { withCredentials: true },
    );
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create reservation",
    );
  }
}
