import React from 'react';
import logoImage from '@/assets/clean-stand4humanity-logo.png';

const LogoDisplay = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Stand 4 Humanity Logo
        </h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-2xl inline-block">
          <img 
            src={logoImage} 
            alt="Stand 4 Humanity Logo" 
            className="w-80 h-80 object-contain rounded-xl"
          />
        </div>
        
        <p className="text-slate-300 mt-6 text-lg">
          Perfect for your Instagram profile and humanitarian messaging
        </p>
        
        <div className="mt-8 text-sm text-slate-400">
          <p>Right-click the image above to save it to your device</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDisplay;