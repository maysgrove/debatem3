// src/Login.tsx
import React, { useState } from "react";
import { login, logout, updateStatus } from "./authService";

const Login = () => {
  const [status, setStatus] = useState("online");

  const handleLogin = async () => {
    const session = await login();
    console.log(session);
  };

  const handleLogout = async () => {
    const session = await logout();
    console.log(session);
  };

  const handleStatusUpdate = async (newStatus: string) => {
    const updated = await updateStatus(newStatus);
    console.log(updated);
    setStatus(newStatus);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => handleStatusUpdate("away")}>Set Away</button>
      <button onClick={() => handleStatusUpdate("offline")}>Set Offline</button>
      <p>Current status: {status}</p>
    </div>
  );
};

export default Login;
