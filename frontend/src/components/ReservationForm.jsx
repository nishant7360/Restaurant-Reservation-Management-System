import { useState } from "react";
import GuestCounter from "./GuestCounter";
import { validateReservation } from "../utils/validateReservation";
import { useCreateReservation } from "../features/reservation/useCreateReservation";

const today = new Date().toISOString().split("T")[0];

function ReservationForm({ onSuccess }) {
  const [form, setForm] = useState({
    reservationDate: "",
    startTime: "",
    endTime: "",
    guests: 2,
  });
  const [formError, setFormError] = useState("");
  const { mutate: reserve, isPending } = useCreateReservation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateReservation(form);
    if (validationError) {
      setFormError(validationError);
      return;
    }
    setFormError("");
    reserve(form, { onSuccess });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-sm text-gray-600 block mb-1.5">Date</label>
      <input
        type="date"
        name="reservationDate"
        value={form.reservationDate}
        onChange={handleChange}
        min={today}
        required
        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm mb-4"
      />

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <label className="text-sm text-gray-600 block mb-1.5">
            Start time
          </label>
          <input
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-gray-600 block mb-1.5">End time</label>
          <input
            type="time"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm"
          />
        </div>
      </div>

      <label className="text-sm text-gray-600 block mb-1.5">Guests</label>
      <div className="mb-6">
        <GuestCounter
          value={form.guests}
          onChange={(guests) => setForm({ ...form, guests })}
        />
      </div>

      {formError && <p className="text-sm text-red-600 mb-4">{formError}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-orange-600 text-white py-3 rounded-full text-sm font-medium hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Reserving..." : "Confirm reservation"}
      </button>
    </form>
  );
}

export default ReservationForm;
