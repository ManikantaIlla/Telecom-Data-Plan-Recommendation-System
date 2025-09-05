import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanCard from "../components/PlanCard.jsx";

export default function CustomerDashboard() {
  const [plans, setPlans] = useState([]);
  const [recs, setRecs] = useState([]);
  const server = "http://localhost:8080";
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${server}/plans`, { headers: { Authorization: `Bearer ${token}` } }).then(r => setPlans(r.data));
    axios.get(`${server}/reco/mine`, { headers: { Authorization: `Bearer ${token}` } }).then(r => setRecs(r.data));
  }, []);

  return (
    <div className="grid gap-4">
      <div className="card">
        <h2 className="text-xl font-semibold">Best-suited Plans</h2>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {recs.map(r => <div key={r._id} className="p-2 border rounded">
            <p><b>Plan:</b> {r.planCode}</p>
            <p><b>Score:</b> {r.score?.toFixed?.(3)}</p>
            <p className="text-sm text-slate-600">{r.rationale}</p>
          </div>)}
        </div>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">All Plans</h2>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {plans.map(p => <PlanCard key={p._id} plan={p} />)}
        </div>
      </div>
    </div>
  );
}
