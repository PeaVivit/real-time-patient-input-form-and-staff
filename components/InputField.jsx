export default function InputField({
  label,
  name,
  register,
  error,
  rules,
  ...props
}) {
  return (
    <div>
      <label className="block font-medium">{label}</label>

      <input
        {...register(name, rules)}   // 🔥 ใส่ตรงนี้
        {...props}
            className="border p-3 rounded-lg w-full 
                    focus:ring-2 focus:ring-blue-400 
                    focus:border-blue-400
                    outline-none transition"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}