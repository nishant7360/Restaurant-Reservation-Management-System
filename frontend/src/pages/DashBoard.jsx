import { useAuth } from "../context/AuthContext";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";

function Dashboard() {
  const { isAdmin } = useAuth();

  return isAdmin ? <AdminDashboard /> : <CustomerDashboard />;
}

export default Dashboard;
