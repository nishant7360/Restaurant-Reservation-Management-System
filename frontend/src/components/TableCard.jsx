function TableCard({ table, onEdit, onDelete, isDeleting }) {
  const { tableNumber, capacity, isActive } = table;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Table</p>
          <p className="text-lg font-medium text-gray-900">#{tableNumber}</p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            isActive
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4">Seats {capacity}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(table)}
          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full text-xs font-medium hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(table._id)}
          disabled={isDeleting}
          className="flex-1 border border-red-300 text-red-600 py-2 rounded-full text-xs font-medium hover:bg-red-50 disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default TableCard;
