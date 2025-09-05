import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import AnalystDashboard from "./pages/AnalystDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function getRole() { return localStorage.getItem("role"); }

function Protected({ role, children }) {
  const r = getRole();
  if (!r) return <Navigate to="/login" />;
  if (role && r !== role) return <Navigate to={`/${r}`} />;
  return children;
}

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="btn">Home</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/customer" className="btn">Customer</Link>
        <Link to="/analyst" className="btn">Analyst</Link>
        <Link to="/admin" className="btn">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div className="card"><h1 className="text-2xl font-bold">Telecom Reco</h1></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Protected role="customer"><CustomerDashboard /></Protected>} />
        <Route path="/analyst" element={<Protected role="analyst"><AnalystDashboard /></Protected>} />
        <Route path="/admin" element={<Protected role="admin"><AdminDashboard /></Protected>} />
      </Routes>
    </div>
  );
}
