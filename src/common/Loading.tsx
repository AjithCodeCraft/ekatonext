'use client';

import { Spinner } from "@/components/ui/spinner";
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Loading = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate progress (replace with actual loading progress if available)
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.random() * 10, 90));
    }, 300);
    
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/90 backdrop-blur-md z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40vh] h-[40vh] bg-teal-500/5 rounded-full blur-xl -left-[10vh] -top-[10vh] animate-float-slow" />
        <div className="absolute w-[30vh] h-[30vh] bg-pink-500/5 rounded-full blur-xl right-[5vh] bottom-[15vh] animate-float-medium delay-1000" />
        <div className="absolute w-[25vh] h-[25vh] bg-amber-500/5 rounded-full blur-lg left-[15vh] bottom-[5vh] animate-float-fast delay-500" />
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-xs sm:max-w-sm px-4 transform transition-all duration-500">
        <div className="relative bg-teal-500 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-teal-400/30 shadow-xl overflow-hidden">
          {/* Floating decorative elements */}
          <Sparkles className="absolute -top-3 -right-3 w-8 h-8 text-white/50 animate-pulse" />
          <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-white/40 animate-pulse delay-300" />
          
          {/* Content */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo with spinner */}
            <div className="relative flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 transition-all duration-700 animate-soft-pulse"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner 
                  size="lg" 
                  className="text-white/80 w-full h-full" 
                />
              </div>
            </div>

            {/* Progress bar with gradient - updated to white */}
            <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-white to-teal-200 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status text - updated to white */}
            <div className="text-sm text-white/80 tracking-wide">
              {progress < 30 ? 'Breath in. we are almost ready for you...' : 
               progress < 60 ? 'Breath in. we are almost ready for you...' : 
               'Breath in. we are almost ready for you...'}
            </div>
          </div>
        </div>
      </div>

      {/* Add these to your global CSS */}
  
    </div>
  );
};