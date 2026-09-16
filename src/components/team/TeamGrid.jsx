import React from 'react';

const teamMembers = [
  {
    name: 'Pastor Moses',
    roles: ['Telugu', 'Member Care'],
    image: '/assets/team/moses.jpg',
  },
  {
    name: 'Pastor Prakash',
    roles: ['Events Coordinator', 'Kannada Associate'],
    image: '/assets/team/prakash.jpg',
  },
  {
    name: 'Pastor Barnabas',
    roles: ['Tamil', 'Prayer'],
    image: '/assets/team/barnabas.jpg',
  },
  {
    name: 'Pastor Vasantraj',
    roles: ['Kannada', 'Outreach'],
    image: '/assets/team/vasantraj.jpg',
  },
  {
    name: 'Pastor Phillip',
    roles: ['Hindi'],
    image: '/assets/team/phillip.jpg',
  },
  {
    name: 'Pastor Praise',
    roles: ['Worship', 'Administration'],
    image: '/assets/team/praise.jpg',
  },
  {
    name: 'Amrutha',
    roles: ['Book Keeper', 'Administrative Assistant'],
    image: '/assets/team/amrutha.jpg',
  },
];

const TeamGrid = () => {
  return (
    <section id="ministry-team" className="py-20 bg-[#FDEBDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#2a9d8f] text-2xl md:text-3xl font-medium mb-2">Meet</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2744] leading-tight">
            Our Ministry Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`text-center ${
                index === teamMembers.length - 1
                  ? 'sm:col-span-2 lg:col-span-3 lg:max-w-sm lg:mx-auto'
                  : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={100 + (index % 3) * 100}
            >
              <div className="mx-auto mb-5 w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#7a2e3a] mb-2">{member.name}</h3>
              <div className="space-y-0.5">
                {member.roles.map((role) => (
                  <p key={role} className="text-[#7a2e3a]/90 text-base md:text-lg">
                    {role}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
