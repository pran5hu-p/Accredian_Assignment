import Image from "next/image";

export default function Clients() {
  const clientLogos = [
    { name: "Reliance", src: "/rel.png", width: 130, height: 50 },
    { name: "HCL", src: "/hcl.png", width: 95, height: 35 },
    { name: "IBM", src: "/ibm.png", width: 90, height: 35 },
    { name: "CRIF", src: "/crif.png", width: 110, height: 40 },
    { name: "ADP", src: "/adp.svg", width: 90, height: 40 },
    { name: "Bayer", src: "/bayer.svg", width: 75, height: 75 },
  ];

  return (
    <section id="clients" className="w-full bg-white py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight mb-2">
            Our Proven <span className="text-[#2563eb]">Partnerships</span>
          </h2>
          <p className="text-[17px] text-gray-700">
            Successful Collaborations With the <span className="text-[#2563eb]">Industry's Best</span>
          </p>
        </div>

        {/* Logos Container */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-12 lg:gap-4 w-full px-4 lg:px-8">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image 
                src={logo.src} 
                alt={`${logo.name} Logo`} 
                width={logo.width} 
                height={logo.height} 
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}