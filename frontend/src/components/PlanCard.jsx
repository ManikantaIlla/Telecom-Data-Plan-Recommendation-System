import { Card, CardContent } from "@/components/ui/card";

export default function PlanCard({ title, plan }) {
  return (
    <Card className="shadow-lg rounded-2xl">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {plan ? (
          <div className="space-y-1">
            <p><b>{plan.name}</b></p>
            <p>Price: {plan.price}</p>
            <p>Data: {plan.data}</p>
            <p>Calls: {plan.calls}</p>
            <p>Validity: {plan.validity}</p>
          </div>
        ) : (
          <p className="text-gray-500">No plan available</p>
        )}
      </CardContent>
    </Card>
  );
}
