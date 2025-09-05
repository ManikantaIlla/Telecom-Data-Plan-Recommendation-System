import { useState } from "react";
import PlanCard from "../components/PlanCard";
import { Button } from "@/components/ui/button";

export default function CustomerDashboard() {
  const [plan, setPlan] = useState(null);

  const currentPlan = {
    name: "Basic 5GB",
    price: "$19.99",
    data: "5GB",
    calls: "500 min",
    validity: "30 Days",
  };

  const recommendedPlan = {
    name: "Unlimited Plus",
    price: "$49.99",
    data: "Unlimited",
    calls: "Unlimited",
    validity: "30 Days",
  };

  const handleRecommend = () => setPlan(recommendedPlan);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Customer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard title="Current Plan" plan={currentPlan} />
        <PlanCard title="Recommended Plan" plan={plan} />
      </div>
      {!plan && (
        <div className="flex justify-center">
          <Button onClick={handleRecommend}>Get Recommendation</Button>
        </div>
      )}
    </div>
  );
}
