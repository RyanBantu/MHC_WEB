import React, { useState } from 'react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const worshipTimings = [
    { language: 'Hindi', time: '7 AM' },
    { language: 'English', time: '9 AM' },
    { language: 'Kannada', time: '7 AM and 11 AM' },
    { language: 'Tamil', time: '9 AM' },
    { language: 'Telugu', time: '11 AM' }
  ];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a 
          href="/" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          Home
        </a>
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium flex items-center rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105">
            Services
            <svg 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Enhanced Dropdown Menu */}
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-[#FDEBDD] rounded-xl shadow-2xl border border-black/20 z-50 transform transition-all duration-300 ease-out animate-in slide-in-from-top-2">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-black">
                    Sunday Worship Timings
                  </h3>
                </div>
                <div className="space-y-3">
                  {worshipTimings.map((timing, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-3 rounded-lg hover:bg-black/5 transition-colors duration-200 group"
                    >
                      <span className="text-black font-medium group-hover:text-gray-800">
                        {timing.language}:
                      </span>
                      <span className="text-black font-semibold bg-black/5 px-3 py-1 rounded-full text-sm">
                        {timing.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-black/10">
                  <p className="text-xs text-black/70 text-center">
                    Join us for worship in your preferred language
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <a 
          href="/ministries" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          Ministries
        </a>
        <a 
          href="/community" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          Community
        </a>
        <a 
          href="/worship" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          Worship
        </a>
        <a 
          href="/about" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          About us
        </a>
        <a 
          href="/team" 
          className="text-black hover:text-gray-700 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5 hover:scale-105"
        >
          Our Team
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black hover:text-gray-700 p-2 rounded-lg transition-all duration-200 hover:bg-black/5"
        >
          <svg 
            className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-[#FDEBDD] rounded-xl shadow-2xl border border-black/20 z-50 md:hidden transform transition-all duration-300 ease-out animate-in slide-in-from-top-2">
          <div className="py-4">
            <a 
              href="/" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              Home
            </a>
            
            {/* Mobile Services - Collapsible */}
            <div className="px-6 py-3">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-black font-medium hover:text-gray-800 transition-colors duration-200"
              >
                Services
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Services Dropdown */}
              {isServicesOpen && (
                <div className="mt-3 pl-4 space-y-2 border-l-2 border-black/10">
                  <div className="text-black font-medium text-sm mb-3">Sunday Worship Timings:</div>
                  {worshipTimings.map((timing, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-black/5 transition-colors duration-200"
                    >
                      <span className="text-black text-sm">{timing.language}:</span>
                      <span className="text-black font-semibold text-sm bg-black/5 px-2 py-1 rounded-full">
                        {timing.time}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="/ministries" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              Ministries
            </a>
            <a 
              href="/community" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              Community
            </a>
            <a 
              href="/worship" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              Worship
            </a>
            <a 
              href="/about" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              About us
            </a>
            <a 
              href="/team" 
              className="block px-6 py-3 text-black hover:bg-black/5 hover:text-gray-800 transition-all duration-200 font-medium"
            >
              Our Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
