
import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Laptop } from 'lucide-react';

const ComparisonSlide = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const comparisons = [
    {
      item: 'Colossus (1943)',
      icon: Monitor,
      size: { width: 30, height: 8, depth: 8 },
      weight: '5 tons',
      power: '8.5 kW',
      speed: '5,000 chars/sec',
      color: 'from-amber-500 to-yellow-400',
      scale: 1
    },
    {
      item: 'Modern Laptop',
      icon: Laptop,
      size: { width: 1.2, height: 0.8, depth: 0.02 },
      weight: '2.5 lbs',
      power: '65 W',
      speed: '~10^12 ops/sec',
      color: 'from-blue-500 to-cyan-400',
      scale: 0.04
    },
    {
      item: 'Smartphone',
      icon: Smartphone,
      size: { width: 0.3, height: 0.15, depth: 0.008 },
      weight: '6 oz',
      power: '5 W',
      speed: '~10^11 ops/sec',
      color: 'from-green-500 to-emerald-400',
      scale: 0.01
    }
  ];

  return (
    <div className="h-full w-full px-3 py-2 flex flex-col">
      <div className="text-center mb-3">
        <h2 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Scale Comparison
          </span>
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
          From room-sized pioneer to pocket-sized powerhouse
        </p>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Visual Scale Comparison */}
        <div className="mb-4 flex-1">
          <div className="relative bg-slate-800/30 rounded-xl p-4 h-full overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array.from({ length: 400 }).map((_, i) => (
                  <div key={i} className="border border-slate-600" />
                ))}
              </div>
            </div>

            <div className="relative flex items-end justify-center space-x-4 h-full">
              {comparisons.map((item, index) => {
                const IconComponent = item.icon;
                const isVisible = animationStep >= index;
                
                return (
                  <div
                    key={item.item}
                    className={`flex flex-col items-center transform transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-gradient-to-t ${item.color} rounded-lg mb-2 flex items-end justify-center p-2 transition-all duration-1000`}
                      style={{
                        width: `${Math.max(40, item.scale * 200)}px`,
                        height: `${Math.max(40, item.scale * 200)}px`,
                      }}
                    >
                      <IconComponent className="text-white" size={Math.max(16, item.scale * 60)} />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white text-xs">{item.item}</div>
                      <div className="text-xs text-slate-400">
                        {item.size.width}' × {item.size.height}' × {item.size.depth}'
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {comparisons.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div
                key={item.item}
                className={`bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform ${
                  animationStep >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} p-0.5 mb-3`}>
                  <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white mb-2">{item.item}</h3>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Dimensions</span>
                    <span className="text-white font-medium text-xs">
                      {item.size.width}" × {item.size.height}" × {item.size.depth}"
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Weight</span>
                    <span className="text-white font-medium text-xs">{item.weight}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Power</span>
                    <span className="text-white font-medium text-xs">{item.power}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Speed</span>
                    <span className="text-white font-medium text-xs">{item.speed}</span>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-2 p-2 bg-amber-500/10 rounded border border-amber-500/20">
                    <p className="text-amber-400 text-xs font-medium">
                      The original giant that started it all
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlide;
