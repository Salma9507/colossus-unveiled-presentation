
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Zap, Award } from 'lucide-react';

const timelineEvents = [
  {
    year: '1940',
    title: 'Project Genesis',
    description: 'British codebreakers at Bletchley Park begin working on breaking the German Lorenz cipher.',
    icon: Calendar,
    color: 'from-red-500 to-orange-500'
  },
  {
    year: '1941-42',
    title: 'The Challenge',
    description: 'Tommy Flowers proposes using electronics instead of mechanical devices for faster code-breaking.',
    icon: Users,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    year: '1943',
    title: 'Colossus Mark I',
    description: 'First Colossus becomes operational, processing 5,000 characters per second - revolutionary speed.',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    year: '1944',
    title: 'Mass Production',
    description: 'Ten Colossus computers built and deployed, significantly aiding D-Day preparations.',
    icon: Award,
    color: 'from-amber-500 to-green-500'
  }
];

const TimelineSlide = () => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    timelineEvents.forEach((_, index) => {
      setTimeout(() => {
        setVisibleEvents(prev => [...prev, index]);
      }, index * 500);
    });
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center px-6 py-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Timeline of Innovation
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From concept to world-changing reality: The journey of Colossus
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-amber-500 via-yellow-500 to-green-500" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isVisible = visibleEvents.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} p-0.5 transition-all duration-500 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}>
                      <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 transform transition-all duration-700 delay-200 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : isLeft 
                        ? '-translate-x-10 opacity-0' 
                        : 'translate-x-10 opacity-0'
                  }`}>
                    <div className={`bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 ${
                      isLeft ? 'mr-6' : 'ml-6'
                    }`}>
                      <div className={`mb-3 ${isLeft ? 'text-left' : 'text-right'}`}>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${event.color} text-slate-900 rounded-full text-base font-bold mb-2`}>
                          {event.year}
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-bold text-white mb-3 ${isLeft ? 'text-left' : 'text-right'}`}>
                        {event.title}
                      </h3>
                      
                      <p className={`text-slate-300 leading-relaxed text-sm ${isLeft ? 'text-left' : 'text-right'}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide;
