import React from "react";

export default function PlanCard({ plan }) {
  return (
    <div className="card">
      <h3 className="text-lg font-bold">{plan.name} ({plan.code})</h3>
      <p>₹{plan.monthlyPrice} / month</p>
      <p>{plan.dataGB} GB • {plan.voiceMinutes} min • {plan.sms} SMS</p>
      <div className="mt-2 flex gap-2">{(plan.tags||[]).map(t => <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}</div>
    </div>
  );
}
