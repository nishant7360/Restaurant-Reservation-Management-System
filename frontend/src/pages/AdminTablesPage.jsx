import { useState } from "react";
import { useTables } from "../features/admin/useTables";
import { useDeleteTable } from "../features/admin/useDeleteTable";
import TableGrid from "../components/TableGrid";
import AddTableModal from "../features/admin/AddTableModal";
import EditTableModal from "../features/admin/EditTableModal";

function AdminTablesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTable, setEditingTable] = useState(null);
  const { data: tables, isLoading, isError } = useTables();
  const {
    mutate: deleteTable,
    isPending,
    variables: deletingId,
  } = useDeleteTable();

  return (
    <div className="px-8 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-medium text-gray-900">
          Tables
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700"
        >
          + Add table
        </button>
      </div>

      {isLoading && (
        <p className="text-center text-gray-500 text-sm py-16">
          Loading tables...
        </p>
      )}
      {isError && (
        <p className="text-center text-red-500 text-sm py-16">
          Something went wrong.
        </p>
      )}

      {!isLoading && !isError && (
        <TableGrid
          tables={tables}
          onEdit={setEditingTable}
          onDelete={deleteTable}
          deletingId={isPending ? deletingId : null}
        />
      )}

      {showAddModal && <AddTableModal onClose={() => setShowAddModal(false)} />}
      {editingTable && (
        <EditTableModal
          table={editingTable}
          onClose={() => setEditingTable(null)}
        />
      )}
    </div>
  );
}

export default AdminTablesPage;
