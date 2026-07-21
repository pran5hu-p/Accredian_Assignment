import { ChevronDown } from "lucide-react";

export default function Select({ 
  label, 
  options = [], 
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
      <div className="relative">
        <select 
          className={`w-full px-4 py-3 rounded-lg border text-[14px] text-gray-700 bg-white appearance-none focus:outline-none transition-colors ${
            error 
              ? "border-red-500 focus:border-red-500" 
              : "border-gray-200 focus:border-[#2563eb]"
          } ${className}`}
          {...props}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}