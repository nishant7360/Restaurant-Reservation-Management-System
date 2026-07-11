function GuestCounter({ value, onChange }) {
  return (
    <div className="flex items-center gap-3.5 border border-gray-300 rounded-lg px-3 py-1.5 w-fit">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
      >
        −
      </button>
      <span className="text-sm font-medium text-gray-900 min-w-[16px] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
      >
        +
      </button>
    </div>
  );
}

export default GuestCounter;
