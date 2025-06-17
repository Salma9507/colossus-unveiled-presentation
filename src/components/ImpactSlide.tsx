
import React, { useState, useEffect } from 'react';
import { Shield, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const impacts = [
  {
    category: 'Military Impact',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    achievements: [
      'Shortened WWII by 2-4 years',
      'Saved countless Allied lives',
      'Enabled successful D-Day operations',
      'Provided crucial German intelligence'
    ]
  },
  {
    category: 'Technological Legacy',
    icon: Lightbulb,
    color: 'from-amber-500 to-yellow-400',
    achievements: [
      'First programmable digital computer',
      'Pioneered electronic computing',
      'Established computer programming concepts',
      'Inspired post-war computer development'
    ]
  },
  {
    category: 'Computing Evolution',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-400',
    achievements: [
      'Led to modern computer architecture',
      'Influenced early computer companies',
      'Established UK as computing pioneer',
      'Foundation for AI and machine learning'
    ]
  },
  {
    category: 'Global Influence',
    icon: Globe,
    color: 'from-green-500 to-emerald-400',
    achievements: [
      'Changed cryptography forever',
      'Influenced Cold War technology',
      'Shaped modern cybersecurity',
      'Inspired international collaboration'
    ]
  }
];

const ImpactSlide = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    impacts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-col px-3 py-2">
      <div className="text-center mb-3">
        <h2 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            World-Changing Impact
          </span>
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl mx-auto">
          How Colossus transformed warfare, technology, and the future of computing
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={impact.category}
                className={`transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${impact.color} p-0.5 mr-2`}>
                      <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white">{impact.category}</h3>
                  </div>

                  <ul className="space-y-1">
                    {impact.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className={`flex items-start space-x-2 transform transition-all duration-500 ${
                          isVisible 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(index * 150) + (achievementIndex * 100) + 200}ms` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${impact.color} mt-1.5 flex-shrink-0`} />
                        <span className="text-slate-300 text-xs">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 rounded-2xl border border-slate-600/30">
          <h3 className="text-lg font-bold text-center text-amber-400 mb-4">By the Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '10', label: 'Colossus machines built', suffix: '' },
              { number: '2-4', label: 'Years WWII shortened', suffix: '' },
              { number: '63', label: 'Million messages decrypted', suffix: 'M+' },
              { number: '30', label: 'Years kept secret', suffix: '' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 ${
                  visibleItems.length > 2 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${1000 + (index * 200)}ms` }}
              >
                <div className="text-xl font-bold text-white mb-1">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSlide;
