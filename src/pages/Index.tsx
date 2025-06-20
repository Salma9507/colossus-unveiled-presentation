import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import IntroSlide from '../components/IntroSlide';
import TimelineSlide from '../components/TimelineSlide';
import ArchitectureSlide from '../components/ArchitectureSlide';
import ImpactSlide from '../components/ImpactSlide';
import ComparisonSlide from '../components/ComparisonSlide';
import ConclusionSlide from '../components/ConclusionSlide';
import NavigationSidebar from '../components/NavigationSidebar';
import ResourcesSlide from '../components/ResourcesSlide';

const slides = [
  { id: 'intro', title: 'Introduction', component: IntroSlide },
  { id: 'timeline', title: 'Timeline', component: TimelineSlide },
  { id: 'architecture', title: 'Architecture', component: ArchitectureSlide },
  { id: 'comparison', title: 'Scale Comparison', component: ComparisonSlide },
  { id: 'impact', title: 'Impact', component: ImpactSlide },
  { id: 'resources', title: 'Resources', component: ResourcesSlide },
  { id: 'conclusion', title: 'Legacy', component: ConclusionSlide },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setSidebarOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation Sidebar */}
      <NavigationSidebar 
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={goToSlide}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Ultra-compact Header for laptop screens */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-sm border-b border-amber-500/20">
        <div className="flex items-center justify-between px-2 py-1">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1 hover:bg-slate-800 rounded transition-colors"
          >
            <Menu className="w-3 h-3" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="text-xs text-amber-400">
              {currentSlide + 1}/{slides.length}
            </div>
            <div className="text-xs font-medium max-w-32 truncate">
              {slides[currentSlide].title}
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-1 hover:bg-slate-800 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-1 hover:bg-slate-800 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Optimized for laptop screens */}
      <main className="h-full pt-6">
        <div className="h-full w-full">
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-0.5 bg-slate-700/50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Keyboard Navigation Hint - Ultra compact */}
      <div className="fixed bottom-1 right-1 text-xs text-slate-500 bg-slate-800/60 px-1 py-0.5 rounded backdrop-blur-sm">
        ← →
      </div>
    </div>
  );
};

export default Index;
