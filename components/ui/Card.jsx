export default function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl transition-all duration-300">
      {children}
    </div>
  );
}