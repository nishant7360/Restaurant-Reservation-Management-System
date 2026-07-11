import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CustomerDashboard from "./CustomerDashboard";

function Dashboard() {
  const { isAdmin } = useAuth();

  if (isAdmin) {
    return <Navigate to="/admin/reservations" replace />;
  }

  return <CustomerDashboard />;
}

export default Dashboard;
