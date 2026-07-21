import Image from "next/image";
import { 
  Lightbulb, 
  BrainCircuit, 
  Users, 
  BarChart3, 
  Settings, 
  Globe, 
  Wallet,
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function Edge() {
  const expertiseDomains = [
    { title: "Product & Innovation Hub", icon: <Lightbulb className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Gen-AI Mastery", icon: <BrainCircuit className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Leadership Elevation", icon: <Users className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Tech & Data Insights", icon: <BarChart3 className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Operations Excellence", icon: <Settings className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Digital Enterprise", icon: <Globe className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
    { title: "Fintech Innovation Lab", icon: <Wallet className="w-10 h-10 text-[#2563eb]" strokeWidth={1.7} /> },
  ];

  const segmentationCards = [
    {
      title: "Program Specific",
      subtitle: "Certificate, Executive, Post Graduate Certificate",
      image: "/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/senior-management-v2.webp",
    },
  ];

  const targetAudiences = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: <MonitorCheck className="w-7 h-7 text-white" strokeWidth={1.8} />,
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: <MonitorX className="w-7 h-7 text-white" strokeWidth={1.8} />,
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: <GraduationCap className="w-7 h-7 text-white" strokeWidth={1.8} />,
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: <Briefcase className="w-7 h-7 text-white" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="edge" className="w-full bg-white py-12 md:py-16 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/*The Accredian Edge Header & Graphic */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            The <span className="text-[#2563eb]">Accredian Edge</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            Key Aspects of <span className="text-[#2563eb]">Our Strategic Training</span>
          </p>
        </div>

        <div className="relative w-full max-w-[1320px] mx-auto h-[290px] sm:h-[380px] md:h-[440px] mb-20 md:mb-28">
          <Image 
            src="/accredian-edge-usp-v3.svg" 
            alt="The Accredian Edge"
            fill
            className="object-contain"
            priority
          />
        </div>


        {/*Our Domain Expertise Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            Our <span className="text-[#2563eb]">Domain Expertise</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            <span className="text-[#2563eb]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        {/* Domain Expertise Cards Grid */}
        <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-6 mb-24 md:mb-32">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {expertiseDomains.slice(0, 3).map((domain, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-xl bg-blue-50/50 group-hover:scale-110 transition-transform">
                  {domain.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-[17px]">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {expertiseDomains.slice(3, 6).map((domain, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-xl bg-blue-50/50 group-hover:scale-110 transition-transform">
                  {domain.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-[17px]">
                  {domain.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[calc(33.333%-16px)]">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 group">
              <div className="mb-4 p-3 rounded-xl bg-blue-50/50 group-hover:scale-110 transition-transform">
                {expertiseDomains[6].icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-[17px]">
                {expertiseDomains[6].title}
              </h3>
            </div>
          </div>

        </div>


        {/*Tailored Course Segmentation Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            Tailored <span className="text-[#2563eb]">Course Segmentation</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            Explore <span className="text-[#2563eb]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {segmentationCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-[180px]">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center flex flex-col justify-center flex-grow">
                <h3 className="text-[20px] font-bold text-[#2563eb] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* Strategic Skill Enhancement Banner Section  */}
        <div className="max-w-[1250px] mx-auto bg-[#1a73e8] rounded-3xl px-8 pt-8 md:px-12 md:pt-10 text-white relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Side */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-4">
                <p className="text-blue-100 text-[14px] font-medium tracking-wide mb-1">
                  Who Should Join?
                </p>
                <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-[240px] sm:h-[280px] -mb-2">
                <Image 
                  src="/imagehuman.png" 
                  alt="Strategic Skill Enhancement Professionals" 
                  fill 
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Right Side: 2x2 Grid of Target Audiences */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pb-8 md:pb-10">
              {targetAudiences.map((audience, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-2.5 p-2 rounded-xl bg-blue-600/50 border border-blue-400/30">
                    {audience.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-blue-100 text-[13.5px] leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}