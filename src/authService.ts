// src/authService.ts
import axios from "axios";

const API_URL = "http://localhost:4040"; // Backend server URL

// Login User
export const login = async () => {
  const response = await axios.post(`${API_URL}/login`);
  return response.data; // Return login session info
};

// Logout User
export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data; // Return logout status
};

// Update Status
export const updateStatus = async (status: string) => {
  const response = await axios.post(`${API_URL}/status`, { status });
  return response.data; // Return updated status
};
