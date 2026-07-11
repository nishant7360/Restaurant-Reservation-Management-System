import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
