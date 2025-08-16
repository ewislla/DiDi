import React from 'react';
import { Wallet, Download, ShoppingCart, TrendingUp } from 'lucide-react';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Download className="w-12 h-12" />,
      title: "Get a Solana wallet",
      description: "(Phantom/Solflare)",
      emoji: "📱"
    },
    {
      id: 2,
      icon: <Wallet className="w-12 h-12" />,
      title: "Load up with SOL",
      description: "Fuel for the ride",
      emoji: "⛽"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "On launch day, buy on Raydium",
      description: "When the gates open",
      emoji: "🚀"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "HODL and enjoy the ride",
      description: "Destination: Moon",
      emoji: "🌙"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider animate-fade-up">
            How to Buy
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Buying $DIDI is easier than hailing a cab:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="text-center animate-fade-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8 hover:bg-white/20 hover:scale-105 transform transition-all duration-300 hover:border-white/50">
                {/* Step Number */}
                <div className="bg-yellow-400 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl mx-auto mb-6">
                  {step.id}
                </div>
                
                {/* Icon and Emoji */}
                <div className="mb-6">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-4xl">{step.emoji}</div>
                </div>
                
                {/* Content */}
                <h3 className="text-white font-black text-lg mb-3 uppercase">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-white/50 text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Frog Illustration */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 inline-block">
            <div className="text-8xl mb-4 animate-bounce">🐸</div>
            <p className="text-white font-bold text-lg uppercase">
              Ready to hop in?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;