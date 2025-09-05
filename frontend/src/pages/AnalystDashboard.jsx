import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AnalystDashboard() {
  const exportReport = (type) => {
    alert(`Exporting report as ${type}`);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Analyst Dashboard</h1>
      <div className="flex justify-center gap-4">
        <Button onClick={() => exportReport("PDF")}>
          <Download className="mr-2 h-4 w-4" /> Export PDF
        </Button>
        <Button variant="outline" onClick={() => exportReport("CSV")}>
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>
    </div>
  );
}
