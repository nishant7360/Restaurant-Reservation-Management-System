function DateFilter({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3.5 py-2 rounded-lg border border-gray-300 text-sm w-44"
    />
  );
}

export default DateFilter;
