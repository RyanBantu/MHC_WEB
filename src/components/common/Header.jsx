import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-[#FDEBDD] shadow-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 mr-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/assets/home/logo.png"
                  alt="Mysore Hope Center"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-gray-800">
                Mysore Hope Center
              </span>
            </a>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
