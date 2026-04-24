export default function StatusBadge({ status }) {
  const styles = {
    typing: "bg-yellow-400 animate-pulse",
    submitted: "bg-green-500",
    idle: "bg-gray-400",
  };

  const text = {
    typing: "Typing...",
    submitted: "Submitted",
    idle: "Idle",
  };

  return (
    <span
      className={`text-white px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {text[status]}
    </span>
  );
}