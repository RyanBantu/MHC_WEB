import React from 'react';

const AboutHistory = () => {
  const timeline = [
    {
      year: "Late 1940s",
      title: "Gospel Hall Founded",
      description: "Apostle SD Barnabas pioneers Gospel Hall in Tilaknagar - the first Pentecostal church established in Mysore.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      year: "1970s-1990s",
      title: "Pastoral Leadership",
      description: "Pastor SB Samuel John and Pastor SB Prabhu Charan faithfully pastor Gospel Hall, building a strong foundation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: "2005",
      title: "Vision Received",
      description: "It was birthed out of Gospel Hall in Tilaknagar under Apostle Barnabas, leading to the birth of Mysore Hope Center.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      year: "October 2005",
      title: "MHC Established",
      description: "Mysore Hope Center officially starts at Kumbar Koppal, beginning a new chapter in God's ministry in Mysore.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about-history" className="py-20 bg-[#FDEBDD] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 33 33" 
              preserveAspectRatio="xMidYMid meet"
              className="text-[#fd8a77]"
            >
              <path 
                d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Heritage
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mysore Hope Center was started at Kumbar Koppal in October 2005. It was birthed out of a vision that was given to Pastor Tim during a service at Gospel Hall in Tilaknagar.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#fd8a77]">
              <p className="text-lg text-gray-700 leading-relaxed">
                Gospel Hall was pioneered by Apostle SD Barnabas in the late 1940s in the Tilaknagar area. It was the first Pentecostal church that was established in Mysore. It was later pastored by Pastor SB Samuel John and Pastor SB Prabhu Charan. We are truly blessed of the Lord to have such a lineage going back 50 years. God has used this ministry over the many years to impact lives. We desire to grow further in Christ and multiply in advancing God's Kingdom.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#fd8a77] hidden lg:block"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#fd8a77] rounded-full flex items-center justify-center text-white mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[#fd8a77] font-semibold text-lg">{item.year}</span>
                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-[#fd8a77] rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              We desire to grow further in Christ and multiply in advancing God's Kingdom, continuing the legacy of faith that has been passed down through generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
