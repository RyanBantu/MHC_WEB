import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#231F20] text-[#FFF5E6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-12">
          
          {/* Logo and Description - Wider column */}
          <div className="md:col-span-1 lg:pr-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
                <img
                  src="/assets/home/logo-white.png"
                  alt="Mysore Hope Center"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#FFF5E6]">
                MYSORE HOPE CENTER
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A welcoming community where faith grows and hearts connect. Join us in worship, fellowship, and service.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              {/* Instagram */}
              <a 
                href="https://www.youtube.com/@mysorehopecenter-agchurch4399" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#fd8a77] transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#FFF5E6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* YouTube - Replaced Twitter */}
              <a 
                href="https://www.youtube.com/@mysorehopecenter-agchurch4399" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#fd8a77] transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#FFF5E6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Section - Centered */}
          <div className="flex justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-400 mb-6 uppercase tracking-wide">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/worship" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    Our services
                  </a>
                </li>
                <li>
                  <a href="/ministries" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    Ministries
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    Our community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Discover Section - Right aligned */}
          <div className="flex justify-center md:justify-end mr-0 md:mr-10 lg:mr-10">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-400 mb-6 uppercase tracking-wide">Discover</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/beliefs" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-mdtext-md">
                    Our beliefs
                  </a>
                </li>
                <li>
                  <a href="/culture" className="text-[#FFF5E6] hover:text-[#fd8a77] transition-colors duration-300 text-md">
                    Our culture and values
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Advisory Section */}
        <div className="border-t border-[#FFF5E6]/20 pt-8 mb-8" data-aos="fade-up">
          <div className="bg-[#121111] rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Special Advisory</h4>
            <p className="text-[#FFF5E6] opacity-80 text-sm leading-relaxed">
              Jesus Christ, His teachings and the teachings of the Bible are for all people. When attending MHC church services, events and using MHC's resources (including this website), you are doing so by your free choice and free will; being aware that MHC helps strengthen people's faith in Jesus Christ, His teachings and the teachings of the Bible.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFF5E6]/20 pt-6">
          <div className="text-center" data-aos="fade-up">
            <p className="text-gray-500 text-xs">
              © {currentYear} Mysore Hope Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
