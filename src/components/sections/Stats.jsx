export default function Stats() {
  return (
    <section id="stats" className="w-full bg-white py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            Our <span className="text-[#2563eb]">Track Record</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            The Numbers Behind <span className="text-[#2563eb]">Our Success</span>
          </p>
        </div>

        {/* Stats Grid with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0">
          
          <div className="flex flex-col items-center text-center md:border-r md:border-gray-200 px-4">
            <div className="bg-[#eef3ff] text-[#2563eb] text-[26px] md:text-[28px] font-semibold px-10 py-2.5 rounded-full mb-4">
              10K+
            </div>
            <p className="text-black text-[15px] leading-relaxed max-w-[260px]">
              Professionals Trained For Exceptional Career Success
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:border-r md:border-gray-200 px-4">
            <div className="bg-[#eef3ff] text-[#2563eb] text-[26px] md:text-[28px] font-semibold px-10 py-2.5 rounded-full mb-4">
              200+
            </div>
            <p className="text-black text-[15px] leading-relaxed max-w-[260px]">
              Sessions Delivered With Unmatched Learning Excellence
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="bg-[#eef3ff] text-[#2563eb] text-[26px] md:text-[28px] font-semibold px-10 py-2.5 rounded-full mb-4">
              5K+
            </div>
            <p className="text-black text-[15px] leading-relaxed max-w-[260px]">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}