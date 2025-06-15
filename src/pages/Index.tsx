
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import IntroSlide from '../components/IntroSlide';
import TimelineSlide from '../components/TimelineSlide';
import ArchitectureSlide from '../components/ArchitectureSlide';
import ImpactSlide from '../components/ImpactSlide';
import ComparisonSlide from '../components/ComparisonSlide';
import ConclusionSlide from '../components/ConclusionSlide';
import NavigationSidebar from '../components/NavigationSidebar';

const slides = [
  { id: 'intro', title: 'Introduction', component: IntroSlide },
  { id: 'timeline', title: 'Timeline', component: TimelineSlide },
  { id: 'architecture', title: 'Architecture', component: ArchitectureSlide },
  { id: 'comparison', title: 'Scale Comparison', component: ComparisonSlide },
  { id: 'impact', title: 'Impact', component: ImpactSlide },
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-sm border-b border-amber-500/20">
        <div className="flex items-center justify-between px-6 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-amber-400">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="text-lg font-semibold">
              {slides[currentSlide].title}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-full pt-16 pb-2">
        <div className="h-full flex items-center justify-center">
          <CurrentSlideComponent />
        </div>
      </main>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-slate-700">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-4 right-4 text-xs text-slate-400 bg-slate-800/80 px-3 py-2 rounded-lg backdrop-blur-sm">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default Index;
