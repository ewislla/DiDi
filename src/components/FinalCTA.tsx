import React from 'react';
import { InstagramIcon as TelegramIcon, TwitterIcon, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 opacity-30 animate-gradient-shift"></div>
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">🐸</div>
        <div className="absolute top-20 right-20 text-3xl opacity-15 animate-float-delayed">🚕</div>
        <div className="absolute bottom-20 left-20 text-2xl opacity-25 animate-float">💰</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-float-delayed">🌙</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main CTA Text */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-wider animate-fade-up">
            The ride is starting.
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-wider animate-fade-up-delay-1">
            The meter's running.
          </h3>
          <h4 className="text-2xl md:text-4xl font-black text-yellow-300 mb-12 uppercase tracking-wider animate-fade-up-delay-2">
            Get in, degen. 🚕
          </h4>
        </div>

        {/* Taxi Visual */}
        <div className="mb-12 animate-fade-up-delay-3">
          <div className="relative inline-block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
              <div className="text-8xl md:text-9xl mb-4">🐸🚕💨</div>
              <div className="flex justify-center space-x-2 text-2xl">
                <span className="animate-bounce">💰</span>
                <span className="animate-bounce-delayed">💰</span>
                <span className="animate-bounce">💰</span>
                <span className="animate-bounce-delayed">💰</span>
              </div>
            </div>
            
            {/* Speed lines */}
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 text-white/30">
              <div className="text-4xl">💨💨💨</div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mb-12 animate-fade-up-delay-4">
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Join the $DIDI crew before the doors close.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up-delay-5">
          <button className="bg-white text-orange-500 px-10 py-5 rounded-full text-xl font-black uppercase tracking-wider hover:scale-110 transform transition-all duration-300 hover:shadow-2xl flex items-center space-x-3 group">
            <TelegramIcon className="w-7 h-7 group-hover:animate-pulse" />
            <span>Join Telegram Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button className="border-3 border-white text-white px-10 py-5 rounded-full text-xl font-black uppercase tracking-wider hover:bg-white hover:text-orange-500 transform transition-all duration-300 hover:scale-110 flex items-center space-x-3 group">
            <TwitterIcon className="w-7 h-7 group-hover:animate-pulse" />
            <span>Follow on X</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Final Message */}
        <div className="mt-16 animate-fade-up-delay-6">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">
            Don't fade the frog. Don't miss the ride.
          </p>
          <div className="text-4xl animate-pulse">🚀🐸🚀</div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;