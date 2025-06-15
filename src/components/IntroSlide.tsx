
import React, { useState, useEffect } from 'react';
import { Cpu, Calendar, MapPin, Users } from 'lucide-react';

const IntroSlide = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column - Main Content */}
        <div className={`space-y-8 transform transition-all duration-1000 ${
          visible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
              World's First Programmable Digital Computer
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                COLOSSUS
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              The revolutionary machine that changed the course of World War II and laid the foundation for modern computing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-colors">
              <Calendar className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-2xl font-bold text-white">1943</div>
              <div className="text-slate-400">First operational</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-colors">
              <MapPin className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-2xl font-bold text-white">Bletchley Park</div>
              <div className="text-slate-400">Secret location</div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${
          visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="relative">
            {/* Main Computer Visualization */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-amber-500/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Cpu className="w-12 h-12 text-amber-400" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-400">2,400</div>
                    <div className="text-sm text-slate-400">Vacuum tubes</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-8 gap-2">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-8 bg-amber-500/20 rounded-sm animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Input: Encrypted messages</span>
                  <span>Output: Decrypted intelligence</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 p-4 rounded-xl font-bold shadow-lg">
              <div className="text-2xl">30 ft</div>
              <div className="text-sm">Length</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-amber-500/30 text-amber-400 p-4 rounded-xl font-bold shadow-lg">
              <div className="text-2xl">5 tons</div>
              <div className="text-sm">Weight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
