import React from "react";

export default function AnalystDashboard() {
  return (
    <div className="grid gap-4">
      <div className="card">
        <h2 className="text-xl font-semibold">Analyst Dashboard</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Cohort usage vs. current plan comparison</li>
          <li>Export usage reports (CSV/PDF)</li>
          <li>Drill-down by region/segment</li>
        </ul>
        <p className="text-sm text-slate-600 mt-2">Hook to Streamlit at <code>http://localhost:8501</code> for rich analytics.</p>
      </div>
    </div>
  );
}
