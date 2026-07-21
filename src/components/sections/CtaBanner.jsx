import { Headphones } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CtaBanner({ onContactClick }) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="relative bg-[#1a73e8] rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[800px] h-[800px] pointer-events-none overflow-hidden rounded-full opacity-40">
            <div className="absolute inset-0 rounded-full border-[60px] border-blue-400/30 scale-100" />
            <div className="absolute inset-0 rounded-full border-[80px] border-blue-400/20 scale-75" />
            <div className="absolute inset-0 rounded-full border-[100px] border-blue-500/20 scale-50" />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md">
              <Headphones className="w-9 h-9 text-[#1a73e8]" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight mb-1 text-white">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-blue-100 text-[15px] md:text-[16px]">
                Get Expert Guidance for Your Team&rsquo;s Success!
              </p>
            </div>
          </div>

          <div className="z-10 shrink-0">
            <Button variant="white" showArrow onClick={onContactClick}>
              Contact Us
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}