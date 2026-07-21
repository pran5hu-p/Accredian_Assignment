import Link from "next/link";
import Image from "next/image";

export default function Footer({ onEnquireClick }) {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          {/*Logo & Social Icons */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.webp" 
                alt="Accredian Logo" 
                width={160} 
                height={45} 
                className="w-auto h-10 object-contain"
              />
            </Link>
            <div className="flex items-center gap-4 text-gray-700">
              
              {/* Facebook */}
              <Link 
                href="https://www.facebook.com/accredianlearn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1b62cc] transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </Link>

              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/company/accredianedu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1b62cc] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </Link>

              {/* X */}
              <Link 
                href="https://x.com/accredianedu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1b62cc] transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </Link>

              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/accredian_edu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1b62cc] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </Link>

              {/* YouTube */}
              <Link 
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#1b62cc] transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>

            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={onEnquireClick}
              className="bg-[#2563eb] text-white px-8 py-2.5 rounded-lg text-[15px] font-bold cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Enquire Now
            </button>
            <span className="text-sm font-medium text-gray-800 mt-2">
              Speak with our Advisor
            </span>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-300 mb-8" />

        {/* Middle Section: Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-[17px] font-bold text-black">Accredian</h3>
            <Link href="#" className="text-[15px] font-medium text-gray-700 hover:text-[#1b62cc] transition-colors">About</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-700 hover:text-[#1b62cc] transition-colors">Blog</Link>
            <Link href="#" className="text-[15px] font-medium text-gray-700 hover:text-[#1b62cc] transition-colors">Why Accredian</Link>
          </div>

          <div className="flex flex-col gap-4 md:pl-20">
            <h3 className="text-[17px] font-bold text-black">Contact Us</h3>
            <p className="text-[15px] font-medium text-gray-700">
              Email us: <a href="mailto:enterprise@accredian.com" className="text-[#2563eb] hover:underline">enterprise@accredian.com</a>
            </p>
            <p className="text-[15px] font-medium text-gray-700 leading-relaxed max-w-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-[14px] font-medium text-gray-800">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}