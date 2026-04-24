export default function AnimatedField({ label, value }) {
  return (
    <div className="p-3 border rounded-lg bg-gray-50 transition-all duration-300 hover:shadow-md">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-lg">{value || "-"}</p>
    </div>
  );
}