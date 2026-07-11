import { useState } from "react";
import { useUpdateTable } from "./useUpdateTable";

function EditTableModal({ table, onClose }) {
  const [capacity, setCapacity] = useState(table.capacity);
  const [isActive, setIsActive] = useState(table.isActive);
  const [formError, setFormError] = useState("");
  const { mutate: update, isPending } = useUpdateTable();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!capacity || capacity <= 0) {
      setFormError("Capacity must be greater than 0");
      return;
    }
    setFormError("");
    update(
      { id: table._id, capacity: Number(capacity), isActive },
      { onSuccess: onClose },
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6 z-50">
      <div className="bg-white rounded-2xl p-7 w-full max-w-sm">
        <h2 className="font-serif text-lg font-medium text-gray-900 mb-5">
          Edit Table #{table.tableNumber}
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="text-sm text-gray-600 block mb-1.5">Capacity</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            min="1"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
          />

          <label className="flex items-center gap-2.5 mb-5 cursor-pointer w-fit">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="w-4 h-4 accent-orange-600"
            />
            <span className="text-sm text-gray-700">Active</span>
          </label>

          {formError && (
            <p className="text-sm text-red-600 mb-4">{formError}</p>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 bg-orange-600 text-white py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 disabled:opacity-60"
            >
              {isPending ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTableModal;
