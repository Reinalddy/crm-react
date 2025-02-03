import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/home/Index";
import Register from "../views/auth/Register";
import Login from "../views/auth/Login";
import Dashboard from "../views/user/dashboard/index";
import AdminDashboard from "../views/admin/dashboard/index";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />} />
      <Route path="/user/dashboard" element={<Dashboard />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
