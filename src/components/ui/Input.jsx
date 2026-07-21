export default function Input({ 
  label, 
  error, 
  className = "", 
  ...props 
}) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-[14px] font-medium text-gray-700">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input 
        className={`w-full px-4 py-3 rounded-lg border text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
          error 
            ? "border-red-500 focus:border-red-500" 
            : "border-gray-200 focus:border-[#2563eb]"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}