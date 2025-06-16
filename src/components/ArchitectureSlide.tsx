
import React, { useState } from 'react';
import { Cpu, Zap, Settings, Database } from 'lucide-react';

const ArchitectureSlide = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const components = [
    {
      id: 'input',
      title: 'Paper Tape Input',
      description: 'Encrypted messages fed via perforated paper tape at high speed',
      icon: Database,
      position: 'top-2 left-4',
      details: 'Could read 5,000 characters per second - unprecedented speed for the era'
    },
    {
      id: 'processor',
      title: 'Valve Processing Unit',
      description: '2,400 vacuum tubes performing logical operations',
      icon: Cpu,
      position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      details: 'Each valve could switch thousands of times per second, enabling rapid computation'
    },
    {
      id: 'control',
      title: 'Control Panel',
      description: 'Plugboards and switches for programming operations',
      icon: Settings,
      position: 'bottom-4 left-4',
      details: 'Operators could reprogram Colossus by changing plug connections and switch settings'
    },
    {
      id: 'output',
      title: 'Output System',
      description: 'Decrypted results displayed and printed',
      icon: Zap,
      position: 'top-2 right-4',
      details: 'Results provided crucial intelligence for Allied military operations'
    }
  ];

  return (
    <div className="container mx-auto px-3 py-2 h-full">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Architecture & Design
          </span>
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
          Revolutionary engineering that pushed the boundaries of what was possible
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start h-5/6">
        {/* Main Visualization */}
        <div className="lg:col-span-2">
          <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 h-full min-h-[400px]">
            {/* Machine Frame */}
            <div className="absolute inset-4 border-2 border-amber-500/30 rounded-xl bg-gradient-to-br from-slate-700/20 to-slate-800/20">
              {/* Vacuum Tubes Visualization */}
              <div className="absolute inset-2 grid grid-cols-12 gap-1 opacity-20">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-amber-500 rounded-full aspect-square animate-pulse"
                    style={{ animationDelay: `${i * 0.02}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Interactive Components */}
            {components.map((component) => {
              const IconComponent = component.icon;
              return (
                <button
                  key={component.id}
                  className={`absolute ${component.position} group`}
                  onMouseEnter={() => setActiveComponent(component.id)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-0.5 transform transition-all duration-300 ${
                    activeComponent === component.id ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 transition-all duration-200 ${
                    activeComponent === component.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                  }`}>
                    <div className="bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap border border-amber-500/30">
                      {component.title}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Size Reference */}
            <div className="absolute bottom-2 right-2 text-amber-400 text-xs font-medium">
              30 feet × 8 feet × 8 feet
            </div>
          </div>
        </div>

        {/* Component Details */}
        <div className="space-y-3 h-full overflow-y-auto">
          <h3 className="text-lg font-bold text-amber-400 mb-3">Key Components</h3>
          
          {components.map((component) => {
            const IconComponent = component.icon;
            const isActive = activeComponent === component.id;
            
            return (
              <div
                key={component.id}
                className={`bg-slate-800/50 p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'border-amber-500/50 bg-slate-800/80' 
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}
                onMouseEnter={() => setActiveComponent(component.id)}
                onMouseLeave={() => setActiveComponent(null)}
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-r from-amber-500 to-yellow-400 p-0.5 flex-shrink-0">
                    <div className="w-full h-full bg-slate-900 rounded flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-1">{component.title}</h4>
                    <p className="text-slate-300 text-xs mb-1">{component.description}</p>
                    {isActive && (
                      <p className="text-amber-400 text-xs font-medium animate-fade-in">
                        {component.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-400/10 p-3 rounded-lg border border-amber-500/20">
            <h4 className="text-amber-400 font-semibold mb-1 text-sm">Engineering Marvel</h4>
            <p className="text-slate-300 text-xs">
              Colossus used 2,400 vacuum tubes - more than any machine built before it. 
              The engineering team solved unprecedented challenges in heat management, 
              reliability, and electronic switching speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
