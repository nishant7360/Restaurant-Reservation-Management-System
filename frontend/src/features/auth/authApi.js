import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export async function register(name, email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/register`,
      { name, email, password },
      { withCredentials: true },
    );

    return response.data.data;
  } catch (error) {
    console.log("register error", error);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { withCredentials: true },
    );

    return response.data.data;
  } catch (error) {
    console.log("login error", error);
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }
    console.log("Get current user", error);
    throw new Error(error.response?.data?.message || "Getting user failed");
  }
}

export async function logout() {
  const response = await axios.post(
    `${BASE_URL}/logout`,
    {},
    { withCredentials: true },
  );
  return response.data.data;
}
