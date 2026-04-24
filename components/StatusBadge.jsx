export default function StatusBadge({ status }) {
  let color = "bg-gray-400";
  let text = "Idle";

  if (status === "typing") {
    color = "bg-yellow-400";
    text = "Typing...";
  }

  if (status === "submitted") {
    color = "bg-green-500";
    text = "Submitted";
  }

  return (
    <span className={`text-white px-3 py-1 rounded ${color}`}>
      {text}
    </span>
  );
}