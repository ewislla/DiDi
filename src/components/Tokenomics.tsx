import React, { useState } from 'react';
import { PieChart, Shield, Users, Flame } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const tokenData = [
    {
      id: 1,
      label: "LP Tokens",
      value: "100% Burned",
      percentage: 40,
      color: "text-red-400",
      bgColor: "bg-red-400",
      icon: <Flame className="w-6 h-6" />
    },
    {
      id: 2,
      label: "Community",
      value: "Community-focused",
      percentage: 35,
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      label: "Ownership",
      value: "Renounced",
      percentage: 25,
      color: "text-green-400",
      bgColor: "bg-green-400",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider animate-fade-up">
            Tokenomics
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats */}
          <div className="animate-fade-in-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase">
                Token Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/20">
                  <span className="text-white/80 text-lg">Total Supply:</span>
                  <span className="text-white font-bold text-lg">500,000,000,000</span>
                </div>
                
                {tokenData.map((item) => (
                  <div 
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b border-white/20 hover:bg-white/5 rounded-lg px-4 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredSection(item.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="text-white/80 text-lg">{item.label}:</span>
                    </div>
                    <span className="text-white font-bold text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-yellow-300 font-semibold text-lg">
                  Distribution: Transparent & community-focused
                </p>
              </div>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 text-center">
                <div className="relative mx-auto w-64 h-64 mb-8">
                  {/* Pie Chart Visual */}
                  <div className="w-full h-full rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-conic from-red-400 via-blue-400 to-green-400 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 bg-orange-600 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🐸</div>
                        <div className="text-white font-bold text-sm">$DIDI</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {tokenData.map((item) => (
                    <div 
                      key={item.id}
                      className={`flex items-center justify-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        hoveredSection === item.id ? 'bg-white/20 scale-105' : 'bg-white/5'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full ${item.bgColor}`}></div>
                      <span className="text-white font-semibold">{item.label}</span>
                      <span className="text-white/70">({item.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating frog watermark */}
              <div className="absolute -top-8 -right-8 text-6xl opacity-20 animate-float">
                🐸
              </div>
              <div className="absolute -bottom-8 -left-8 text-4xl opacity-10 animate-float-delayed">
                🚕
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;