import { NavLink } from "react-router-dom";

const links = [
  { to: "/admin/reservations", label: "Reservations", icon: "📅" },
  { to: "/admin/tables", label: "Tables", icon: "🍽️" },
];

function AdminSidebar() {
  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-100 min-h-screen px-3 py-8">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide px-3 mb-3">
        Manage
      </p>
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-orange-50 text-orange-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
