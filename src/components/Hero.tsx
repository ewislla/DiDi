import React, { useState } from 'react';
import { ArrowRight, FileText, Check } from 'lucide-react';

const Hero = () => {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FE751F] via-[#FFF4E6] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0DB86A] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FE751F] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(26, 26, 26, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-16">
          
          {/* Mobile Image (Top Center) - Hidden on Desktop */}
          <div className="relative lg:hidden flex justify-center w-full">
            <div className="relative z-10">
              {/* Animated Image */}
              <div className={`w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center transform transition-all duration-1000 ${
                isAnimationPaused ? '' : 'animate-bounce'
              }`}>
                <img 
                  src="/assets/hero.PNG" 
                  alt="Animated character" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Interactive Brake Button */}
              <button
                onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] hover:from-[#e5661c] hover:to-[#059669] text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-110 text-sm"
              >
                {isAnimationPaused ? 'START' : 'BRAKE'}
              </button>
            </div>

            {/* Background Glow for Mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FE751F]/20 to-[#0DB86A]/20 blur-3xl scale-150"></div>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-2xl">
                
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-[#FE751F] to-[#0DB86A] bg-clip-text text-transparent">
                  The Frog Who Rides
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FE751F] animate-pulse text-center lg:text-left">
                Ride to Earn
              </h2>
              
              <p className="text-lg sm:text-xl text-[#1A1A1A] max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Why pay for rides when you could earn while moving? Join the revolution against corporate ride-sharing giants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-[#0DB86A] hover:bg-[#059669] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Join the Ride</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Whitepaper</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0DB86A]" />
                <span className="text-sm font-medium text-[#1A1A1A]">LP Burned</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0DB86A]" />
                <span className="text-sm font-medium text-[#1A1A1A]">Ownership Renounced</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0DB86A]" />
                <span className="text-sm font-medium text-[#1A1A1A]">Audit Complete</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Desktop Only */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            <div className="relative z-10 flex justify-center">
              {/* Animated Image */}
              <div className={`w-80 h-80 xl:w-96 xl:h-96 flex items-center justify-center transform transition-all duration-1000 ${
                isAnimationPaused ? '' : 'animate-bounce'
              }`}>
                <img 
                  src="/assets/hero.PNG" 
                  alt="Animated character" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Interactive Brake Button */}
              <button
                onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] hover:from-[#e5661c] hover:to-[#059669] text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-110"
              >
                {isAnimationPaused ? 'START' : 'BRAKE'}
              </button>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FE751F]/20 to-[#0DB86A]/20 blur-3xl scale-150"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1A1A1A] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#1A1A1A] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;