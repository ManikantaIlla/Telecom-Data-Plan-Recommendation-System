import { useState } from "react";
import PlanCard from "../components/PlanCard";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CustomerDashboard() {
  const [plan, setPlan] = useState(null);

  const currentPlan = {
    name: "Basic 5GB",
    price: "$19.99",
    data: 5, // GB
    calls: 500, // minutes
    validity: "30 Days",
  };

  const recommendedPlan = {
    name: "Unlimited Plus",
    price: "$49.99",
    data: 50, // assuming Unlimited ~ 50GB cap
    calls: 2000,
    validity: "30 Days",
  };

  // Mock customer usage
  const usage = {
    data: 12, // GB used
    calls: 800, // minutes used
  };

  const handleRecommend = () => setPlan(recommendedPlan);

  // Chart Data
  const chartData = [
    { category: "Data (GB)", Usage: usage.data, Plan: currentPlan.data },
    { category: "Calls (Minutes)", Usage: usage.calls, Plan: currentPlan.calls },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Customer Dashboard</h1>
      
      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard title="Current Plan" plan={currentPlan} />
        <PlanCard title="Recommended Plan" plan={plan} />
      </div>

      {!plan && (
        <div className="flex justify-center">
          <Button onClick={handleRecommend}>Get Recommendation</Button>
        </div>
      )}

      {/* Usage vs Plan Chart */}
      <div className="mt-10 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Usage vs Current Plan
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Usage" fill="#3b82f6" />
            <Bar dataKey="Plan" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
