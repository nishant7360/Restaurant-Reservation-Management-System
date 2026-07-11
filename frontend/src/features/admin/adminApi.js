import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export async function getAllReservations(query) {
  try {
    const response = await axios.get(`${BASE_URL}/reservations?${query}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get reservations",
    );
  }
}

export async function cancelReservationAdmin(id) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/reservations/cancel/${id}`,
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

export async function updateReservationAdmin(
  id,
  { reservationDate, startTime, endTime, guests },
) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/reservations/${id}`,
      { reservationDate, startTime, endTime, guests },
      { withCredentials: true },
    );
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update reservation",
    );
  }
}
