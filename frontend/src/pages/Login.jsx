import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "Customer") navigate("/customer");
    if (role === "Analyst") navigate("/analyst");
    if (role === "Admin") navigate("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="flex gap-4">
        <Button onClick={() => handleLogin("Customer")}>Customer</Button>
        <Button onClick={() => handleLogin("Analyst")}>Analyst</Button>
        <Button onClick={() => handleLogin("Admin")}>Admin</Button>
      </div>
    </div>
  );
}
