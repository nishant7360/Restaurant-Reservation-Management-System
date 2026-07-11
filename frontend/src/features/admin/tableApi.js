import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export async function getAllTables() {
  try {
    const response = await axios.get(`${BASE_URL}/table`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get tables");
  }
}

export async function createTable(tableNumber, capacity) {
  try {
    const response = await axios.post(
      `${BASE_URL}/table`,
      { tableNumber, capacity },
      { withCredentials: true },
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create tables");
  }
}

export async function updateTable(id, capacity, isActive) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/table/update/${id}`,
      { capacity, isActive },
      { withCredentials: true },
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update tables");
  }
}

export async function deleteTable(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/table/delete/${id}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete tables");
  }
}
