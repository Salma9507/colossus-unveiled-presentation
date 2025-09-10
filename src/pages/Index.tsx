import React from 'react';
import LogoDisplay from '../components/LogoDisplay';

const Index = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <main className="h-full">
        <div className="h-full w-full">
          <LogoDisplay />
        </div>
      </main>
    </div>
  );
};

export default Index;
