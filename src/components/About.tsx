import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider">
              What is $DIDI?
            </h2>
            
            <div className="space-y-6 text-white/90">
              <p className="text-lg md:text-xl leading-relaxed">
                $DIDI is the turbo-charged meme token that fuels the future of ride-sharing — 
                with less corporate greed and more community speed.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Every ride, vibe, and roadside snack stop is now a chance to earn, meme, 
                and move the world forward.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-yellow-300">
                Think Uber. But powered by blockchain, bad jokes, and better vibes.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-white">
                Hop in — we're taking this Lambo straight to decentralization.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              {/* Frog Taxi Illustration Placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl mb-4 animate-pulse">🐸</div>
                  <div className="text-6xl md:text-7xl mb-4">🚕</div>
                  <div className="flex justify-center space-x-2 mb-4">
                    <span className="text-2xl animate-bounce">💰</span>
                    <span className="text-2xl animate-bounce-delayed">💰</span>
                    <span className="text-2xl animate-bounce">💰</span>
                  </div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">
                    DiDi driving to the moon
                  </p>
                </div>
              </div>
              
              {/* Floating crypto logos */}
              <div className="absolute -top-4 -right-4 bg-purple-500 rounded-full p-2 animate-float">
                <span className="text-white font-bold text-sm">SOL</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-2 animate-float-delayed">
                <span className="text-white font-bold text-sm">RAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;