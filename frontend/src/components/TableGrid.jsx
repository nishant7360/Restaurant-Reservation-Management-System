import TableCard from "./TableCard";

function TableGrid({ tables, onEdit, onDelete, deletingId }) {
  if (!tables?.length) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center">
        <p className="text-gray-500 text-sm">No tables added yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {tables.map((t) => (
        <TableCard
          key={t._id}
          table={t}
          onEdit={onEdit}
          onDelete={onDelete}
          isDeleting={deletingId === t._id}
        />
      ))}
    </div>
  );
}

export default TableGrid;
