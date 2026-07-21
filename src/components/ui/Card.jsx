export default function Card({ 
  children, 
  className = "", 
  hoverEffect = true,
  ...props 
}) {
  return (
    <div 
      className={`bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(37,99,235,0.08)] ${
        hoverEffect ? "hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] transition-all duration-300" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}