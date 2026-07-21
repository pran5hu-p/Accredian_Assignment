import { BarChart3, Presentation, MonitorPlay } from "lucide-react";
import Card from "@/components/ui/Card";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.8} />,
    },
    {
      number: "2",
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: <Presentation className="w-6 h-6 text-white" strokeWidth={1.8} />,
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: <MonitorPlay className="w-6 h-6 text-white" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-12 md:py-16 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            How We <span className="text-[#2563eb]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-[17px] text-gray-700">
            A Structured Three-Step Approach to <span className="text-[#2563eb]">Skill Development</span>
          </p>
        </div>

        {/* cards */}
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative !bg-[#eef4ff] !border-blue-100 p-6 pt-10 flex flex-col items-center text-center group"
            >
              {/* Left/Right Vertical Blue Side Accents */}
              <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-[3px] h-[40px] bg-[#2563eb] rounded-full hidden sm:block" />
              <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[3px] h-[40px] bg-[#2563eb] rounded-full hidden sm:block" />

              {/* Number Badge at Top-Left */}
              <div className="absolute top-5 left-5 w-7 h-7 rounded-full border border-blue-200 bg-white text-[#2563eb] font-bold text-[13px] flex items-center justify-center shadow-sm">
                {step.number}
              </div>

              {/* Circular Icon */}
              <div className="mb-4 p-3.5 rounded-full bg-[#2563eb] shadow-md group-hover:scale-105 transition-transform">
                {step.icon}
              </div>

              {/* Card Title & Description */}
              <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}