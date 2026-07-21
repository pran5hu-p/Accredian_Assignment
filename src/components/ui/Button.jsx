import { ChevronRight } from "lucide-react";

export default function Button({ 
  children, 
  variant = "primary", // "primary" | "white" | "outline"
  icon = null, 
  showArrow = false,
  className = "", 
  ...props 
}) {
  const baseStyles = "font-semibold text-[16px] px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm";
  
  const variants = {
    primary: "bg-[#2563eb] hover:bg-blue-700 text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)]",
    white: "bg-white hover:bg-blue-50 text-[#1a73e8] shadow-lg",
    outline: "bg-transparent border border-gray-300 hover:border-blue-500 text-gray-800 hover:text-[#2563eb]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}