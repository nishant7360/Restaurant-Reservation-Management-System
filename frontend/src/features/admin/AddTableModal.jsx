import { useState } from "react";
import { useCreateTable } from "./useCreateTable";

function AddTableModal({ onClose }) {
  const [form, setForm] = useState({ tableNumber: "", capacity: "" });
  const [formError, setFormError] = useState("");
  const { mutate: create, isPending } = useCreateTable();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.tableNumber || !form.capacity) {
      setFormError("Both fields are required");
      return;
    }
    if (form.capacity <= 0) {
      setFormError("Capacity must be greater than 0");
      return;
    }
    setFormError("");
    create(
      {
        tableNumber: Number(form.tableNumber),
        capacity: Number(form.capacity),
      },
      { onSuccess: onClose },
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6 z-50">
      <div className="bg-white rounded-2xl p-7 w-full max-w-sm">
        <h2 className="font-serif text-lg font-medium text-gray-900 mb-5">
          Add table
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="text-sm text-gray-600 block mb-1.5">
            Table number
          </label>
          <input
            type="number"
            name="tableNumber"
            value={form.tableNumber}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
          />

          <label className="text-sm text-gray-600 block mb-1.5">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-5"
          />

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
              {isPending ? "Adding..." : "Add table"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTableModal;
