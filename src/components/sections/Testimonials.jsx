"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    {
      logo: "/adp.svg",
      alt: "ADP",
      quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
    },
    {
      logo: "/bayer.svg",
      alt: "Bayer",
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
    },
    {
      logo: "/rel.png",
      alt: "Reliance Industries Limited",
      quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft: sLeft, clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollRatio = maxScroll > 0 ? sLeft / maxScroll : 0;
      const newIndex = Math.round(scrollRatio * 1);
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = index === 0 ? 0 : maxScroll;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.0;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="w-full bg-white py-12 md:py-20 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            Testimonials from <span className="text-[#2563eb]">Our Partners</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            What <span className="text-[#2563eb]">Our Clients</span> Are Saying
          </p>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 focus:outline-none cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'auto' }}
        >
          {testimonials.map((item, index) => (
            <Card 
              key={index}
              hoverEffect={false}
              className="min-w-full md:min-w-[calc(50%-12px)] snap-center p-8 md:p-10 flex flex-col justify-between pointer-events-auto border-gray-200/85 shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
            >
              <div className="h-10 mb-8 flex items-center">
                <div className="relative h-8 w-28">
                  <Image 
                    src={item.logo} 
                    alt={item.alt} 
                    fill 
                    className="object-contain object-left pointer-events-none"
                  />
                </div>
              </div>

              <p className="text-gray-700 text-[16px] md:text-[17px] leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {[0, 1].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToCard(dotIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === dotIndex ? "w-6 bg-[#2563eb]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}