import Image from "next/image";

export default function Hero({ onEnquireClick }) {
  return (
    <section id="home" className="w-full pt-8 pb-16 bg-[#f8f9fc]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="rounded-2xl md:rounded-[2rem] bg-[#f4f8ff] flex flex-col-reverse sm:flex-row items-center overflow-visible relative shadow-[0_0_40px_rgba(0,0,0,0.12)] border border-blue-100/50">
          
          {/* Left Column*/}
          <div className="flex-1 w-full p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col items-start justify-center relative z-10">
            
            <h1 className="text-[36px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-semibold text-gray-900 leading-[1.15] tracking-tight mb-5">
              Next-Gen <span className="text-[#2563eb]">Expertise</span><br />
              For Your <span className="text-[#2563eb]">Enterprise</span>
            </h1>
            
            <p className="text-[17px] md:text-[19px] text-gray-800 mb-8 max-w-[450px] leading-snug">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[14px] md:text-[15px] text-gray-800">Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[14px] md:text-[15px] text-gray-800">Industry Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[14px] md:text-[15px] text-gray-800">Expert Guidance</span>
              </div>
            </div>

            {/* Enquire Now Button */}
            <button 
              onClick={onEnquireClick}
              className="bg-[#2563eb] text-white px-8 py-3.5 rounded-xl text-[16px] font-semibold shadow-[0_6px_15px_rgba(37,99,235,0.3)] cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Enquire Now
            </button>
          </div>

          {/*Visual / Image */}
          <div className="flex-1 w-full relative min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
            <Image 
              src="/corporate-big-hero-v4.webp" 
              alt="High Performance Teams" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom sm:object-right-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}