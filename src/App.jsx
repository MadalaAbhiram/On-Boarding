import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import "./App.css";

export default function App() {
  const [role, setRole] = useState(null);

  if (!role) return <Onboarding setRole={setRole} />;

  return role === "admin" ? <DashboardAdmin /> : <DashboardUser />;
}
