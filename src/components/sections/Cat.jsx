import Image from "next/image";

export default function Cat() {
  return (
    <section id="cat" className="w-full bg-white py-12 md:py-16 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            The <span className="text-[#2563eb]">CAT Framework</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            Our Proven Approach to <span className="text-[#2563eb]">Learning Excellence</span>
          </p>
        </div>
        {/* Image Container */}
        <div className="relative w-full max-w-[950px] mx-auto h-[240px] sm:h-[310px] md:h-[380px]">
          <Image 
            src="/catV2.svg" 
            alt="The CAT Framework - Concept, Application, Tools"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}