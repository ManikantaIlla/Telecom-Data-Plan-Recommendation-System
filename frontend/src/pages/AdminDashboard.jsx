import React from "react";

export default function AdminDashboard() {
  return (
    <div className="grid gap-4">
      <div className="card">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Manage plans (CRUD)</li>
          <li>Manage users & roles</li>
          <li>System health: API, Mongo, ML service</li>
        </ul>
      </div>
    </div>
  );
}
