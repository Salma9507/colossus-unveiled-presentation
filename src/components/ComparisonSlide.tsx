
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
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Scale Comparison
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          From room-sized pioneer to pocket-sized powerhouse
        </p>
      </div>

      {/* Visual Scale Comparison */}
      <div className="mb-16">
        <div className="relative bg-slate-800/30 rounded-3xl p-12 min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border border-slate-600" />
              ))}
            </div>
          </div>

          <div className="relative flex items-end justify-center space-x-8 h-full">
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
                    className={`bg-gradient-to-t ${item.color} rounded-lg mb-4 flex items-end justify-center p-4 transition-all duration-1000`}
                    style={{
                      width: `${Math.max(60, item.scale * 300)}px`,
                      height: `${Math.max(80, item.scale * 400)}px`,
                    }}
                  >
                    <IconComponent className="text-white" size={Math.max(24, item.scale * 100)} />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-sm">{item.item}</div>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comparisons.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <div
              key={item.item}
              className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform ${
                animationStep >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 300}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-0.5 mb-6`}>
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-6">{item.item}</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions</span>
                  <span className="text-white font-medium">
                    {item.size.width}" × {item.size.height}" × {item.size.depth}"
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-400">Weight</span>
                  <span className="text-white font-medium">{item.weight}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-400">Power</span>
                  <span className="text-white font-medium">{item.power}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-400">Speed</span>
                  <span className="text-white font-medium">{item.speed}</span>
                </div>
              </div>

              {index === 0 && (
                <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <p className="text-amber-400 text-sm font-medium">
                    The original giant that started it all
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonSlide;
