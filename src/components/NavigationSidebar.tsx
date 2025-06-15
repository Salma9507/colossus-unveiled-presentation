
import React from 'react';
import { X } from 'lucide-react';

interface NavigationSidebarProps {
  slides: Array<{ id: string; title: string; component: React.ComponentType }>;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  slides,
  currentSlide,
  onSlideSelect,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-r border-amber-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-amber-400">Presentation Outline</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => onSlideSelect(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'hover:bg-slate-800/50 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentSlide === index
                      ? 'bg-amber-500 text-slate-900'
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium">{slide.title}</span>
                </div>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
            <h3 className="text-sm font-semibold text-amber-400 mb-2">About Colossus</h3>
            <p className="text-xs text-slate-400">
              The world's first programmable digital computer, built at Bletchley Park during WWII to break the German Lorenz cipher.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationSidebar;
