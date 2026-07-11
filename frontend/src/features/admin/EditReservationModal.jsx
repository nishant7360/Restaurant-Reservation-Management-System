import { useState } from "react";
import GuestCounter from "../../components/GuestCounter";
import { validateReservation } from "../../utils/validateReservation";
import { useUpdateReservationAdmin } from "./useUpdateReservationAdmin";

function EditReservationModal({ reservation, onClose }) {
  const [form, setForm] = useState({
    reservationDate: reservation.reservationDate.split("T")[0],
    startTime: reservation.startTime,
    endTime: reservation.endTime,
    guests: reservation.guests,
  });
  const [formError, setFormError] = useState("");
  const { mutate: update, isPending } = useUpdateReservationAdmin();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateReservation(form);
    if (validationError) {
      setFormError(validationError);
      return;
    }
    setFormError("");
    update({ id: reservation._id, data: form }, { onSuccess: onClose });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6 z-50">
      <div className="bg-white rounded-2xl p-7 w-full max-w-sm">
        <h2 className="font-serif text-lg font-medium text-gray-900 mb-5">
          Edit reservation
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="text-sm text-gray-600 block mb-1.5">Date</label>
          <input
            type="date"
            name="reservationDate"
            value={form.reservationDate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
          />

          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label className="text-sm text-gray-600 block mb-1.5">
                Start
              </label>
              <input
                type="time"
                name="startTime"
                min="11:00"
                max="23:00"
                value={form.startTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600 block mb-1.5">End</label>
              <input
                type="time"
                name="endTime"
                min="11:00"
                max="23:00"
                value={form.endTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm"
              />
            </div>
          </div>

          <label className="text-sm text-gray-600 block mb-1.5">Guests</label>
          <div className="mb-5">
            <GuestCounter
              value={form.guests}
              onChange={(guests) => setForm({ ...form, guests })}
            />
          </div>

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

export default EditReservationModal;
