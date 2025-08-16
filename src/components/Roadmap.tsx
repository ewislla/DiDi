import React from 'react';
import { Rocket, Coins, TrendingUp, Users, Star } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      id: 1,
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch on Solana",
      description: "the meme chain of legends"
    },
    {
      id: 2,
      icon: <Coins className="w-8 h-8" />,
      title: "Start with 25 SOL",
      description: "pure frog-fueled liquidity"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "List on Raydium",
      description: "let the chaos begin"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Watch degens ape",
      description: "like it's 2021"
    },
    {
      id: 5,
      icon: <Star className="w-8 h-8" />,
      title: "Profit? No. FrogFare.",
      description: "the ultimate destination"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider animate-fade-up">
            The $DIDI Road to Glory
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            We're not here to rug. We're here to ride.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Road Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2"></div>
            
            <div className="flex justify-between items-center relative">
              {roadmapSteps.map((step, index) => (
                <div key={step.id} className="relative group">
                  {/* Signpost */}
                  <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-pointer animate-fade-up">
                    <div className="text-center">
                      <div className="bg-yellow-400 text-orange-600 rounded-full p-3 inline-flex mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-white font-black text-lg mb-2 uppercase">
                        {step.id}️⃣ {step.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connection Point */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-orange-600 mt-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4 animate-fade-up">
                <div className="bg-yellow-400 text-orange-600 rounded-full p-3 flex-shrink-0">
                  {step.icon}
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 flex-1">
                  <h3 className="text-white font-black text-lg mb-2 uppercase">
                    {step.id}️⃣ {step.title}
                  </h3>
                  <p className="text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;