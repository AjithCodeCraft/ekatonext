  // src/components/sections/app-download.tsx
import { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Apple, 
  Play, 
  QrCode, 
  Download, 
  Sparkles 
} from 'lucide-react';
import { Button } from '@/components/website/ui/button';
import { Card } from '@/components/website/ui/card';
import { appstats, features } from '@/data/website/constants';

export function AppDownloadSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white relative overflow-hidden mt-16 lg:mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[
          { top: 'top-20', left: 'left-10', size: 'w-2 h-2', color: 'bg-teal-300', delay: '0' },
          { top: 'top-40', left: 'right-20', size: 'w-3 h-3', color: 'bg-pink-300', delay: '1000' },
          { top: 'bottom-32', left: 'left-20', size: 'w-2 h-2', color: 'bg-teal-400', delay: '2000' },
          { top: 'bottom-20', left: 'right-32', size: 'w-1 h-1', color: 'bg-pink-400', delay: '3000' }
        ].map((dot, index) => (
          <div 
            key={index}
            className={`absolute ${dot.top} ${dot.left} ${dot.size} ${dot.color} rounded-full animate-pulse opacity-60`}
            style={{ animationDelay: `${dot.delay}ms` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-teal-100">
                Your Healing Journey, Always Within Reach
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-teal-100 mb-8 leading-relaxed">
              Take your personalized healing program with you everywhere. The ekaBrahmaa app puts your healers, 
              meal plans, meditation sessions, and progress tracking right in your pocket.
            </p>

            {/* App Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
           {/* Download Buttons */}
{/* Download Buttons */}
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  {/* App Store Button */}
  <a 
    href="#" 
    className="w-40 h-12 focus:outline-none hover:opacity-90 transition-opacity duration-200"
    aria-label="Download on the App Store"
  >
    <img 
      src="/downloadegoogleplay.svg" 
      alt="Download on the App Store"
      className="w-full h-full object-contain"
    />
  </a>
  
  {/* Google Play Button */}
  <a 
    href="#" 
    className="w-72 h-12 focus:outline-none hover:opacity-90 transition-opacity duration-200"
    aria-label="Get it on Google Play"
  >
    <img 
      src="/downloadplaystore.svg" 
      alt="Get it on Google Play"
      className="w-full h-full object-contain"
    />
  </a>
</div>
            {/* QR Code Link */}
            <div className="flex items-center space-x-3 text-teal-300">
              <QrCode className="w-5 h-5" />
              <span className="text-sm">Scan QR code to download instantly</span>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* QR Code Card */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center hover:scale-105 transition-all duration-500">
                <div className="w-48 h-48 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="text-center">
                    <QrCode className="w-20 h-20 text-teal-600 mx-auto mb-3 animate-pulse" />
                    <p className="text-sm text-teal-700 font-medium">Scan to Download</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Quick Download</h3>
                <p className="text-teal-200 text-sm">
                  Point your camera at the QR code to instantly download the ekaBrahmaa app
                </p>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-teal-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {appstats.map((stat, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 hover:scale-110 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-teal-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}