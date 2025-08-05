import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const launchDate = new Date("2025-08-26T18:00:00Z");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FE751F] via-[#FFF4E6] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0DB86A] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FE751F] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(26, 26, 26, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen pt-16">

          {/* Mobile Image */}
          <div className="lg:hidden flex flex-col items-center w-full mb-8 relative">
            <div className={`w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center transition-all duration-1000 ${
              isAnimationPaused ? '' : 'animate-bounce'
            }`}>
              <img 
                src="/assets/hero.PNG" 
                alt="Animated character" 
                className="w-full h-full object-contain"
              />
            </div>

            <button
              onClick={() => setIsAnimationPaused(!isAnimationPaused)}
              className="mt-6 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] hover:from-[#e5661c] hover:to-[#059669] text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-110 text-sm"
            >
              {isAnimationPaused ? 'START' : 'BRAKE'}
            </button>

            {/* Background Blur under image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FE751F]/20 to-[#0DB86A]/20 blur-3xl scale-150 z-[-1]"></div>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
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

            {/* CTA + Countdown */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://t.me/yourtelegramlink"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#0DB86A] to-[#FE751F] hover:from-[#059669] hover:to-[#e5661c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Join the Ride</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="bg-white border-2 border-[#FE751F] text-[#1A1A1A] px-6 py-4 rounded-lg font-semibold text-lg text-center shadow-md">
                <div className="text-sm font-bold text-[#FE751F] mb-1">🚀 Launching Soon</div>
                <div className="font-mono text-base text-[#0DB86A]">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              {["LP Burned", "Ownership Renounced", "Audit Complete"].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border flex items-center space-x-2"
                >
                  <Check className="w-4 h-4 text-[#0DB86A]" />
                  <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Desktop */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            <div className="relative z-10 flex justify-center">
              <div className={`w-80 h-80 xl:w-96 xl:h-96 flex items-center justify-center transition-all duration-1000 ${
                isAnimationPaused ? '' : 'animate-bounce'
              }`}>
                <img 
                  src="/assets/hero.PNG" 
                  alt="Animated character" 
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] hover:from-[#e5661c] hover:to-[#059669] text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-110"
              >
                {isAnimationPaused ? 'START' : 'BRAKE'}
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FE751F]/20 to-[#0DB86A]/20 blur-3xl scale-150 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
