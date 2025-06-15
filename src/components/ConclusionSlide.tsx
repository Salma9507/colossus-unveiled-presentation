
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Clock, Award } from 'lucide-react';

const ConclusionSlide = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const legacyPoints = [
    {
      title: 'Foundation of Computing',
      description: 'Established the principles that power every computer today',
      icon: Sparkles
    },
    {
      title: 'Secret for Decades',
      description: 'Remained classified until the 1970s, limiting recognition',
      icon: Clock
    },
    {
      title: 'Unsung Heroes',
      description: 'Tommy Flowers and team deserve recognition as computing pioneers',
      icon: Award
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen flex items-center">
      <div className="w-full">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              The Legacy Lives On
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Every computer, smartphone, and digital device today owes a debt to the revolutionary Colossus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {legacyPoints.map((point, index) => {
            const IconComponent = point.icon;
            
            return (
              <div
                key={point.title}
                className={`transform transition-all duration-700 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
              >
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-0.5 mx-auto mb-6">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-amber-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Message */}
        <div className={`bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-amber-500/10 p-12 rounded-3xl border border-amber-500/20 text-center transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-400 mb-6">
              From Breaking Codes to Building the Future
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Colossus didn't just help win a war—it launched the digital age. In the space of a few years, 
              it transformed from an impossible dream to a room-sized reality that would reshape human civilization.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-amber-400">
              <span className="text-lg font-semibold">The future started here</span>
              <ArrowRight className="w-6 h-6 animate-pulse" />
              <span className="text-lg font-semibold">1943</span>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1500ms' }}>
          <h4 className="text-4xl font-bold text-white mb-4">Thank You</h4>
          <p className="text-slate-400">
            Questions? Let's discuss this remarkable piece of computing history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
