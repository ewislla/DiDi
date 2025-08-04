import React from 'react';
import { CheckCircle, Clock, Eye, Lightbulb } from 'lucide-react';

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q4 2024",
      title: "Genesis",
      status: "complete",
      progress: 100,
      icon: <CheckCircle className="w-6 h-6" />,
      items: [
        { text: "Smart contract audited & deployed", completed: true },
        { text: "Community building initiated", completed: true },
        { text: "Mascot design finalized", completed: true }
      ]
    },
    {
      quarter: "Q1 2025",
      title: "Launch",
      status: "progress",
      progress: 67,
      icon: <Clock className="w-6 h-6" />,
      items: [
        { text: "15 SOL liquidity pool creation", completed: true },
        { text: "Raydium DEX listing", completed: true },
        { text: "Marketing campaign launch", completed: false }
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Growth",
      status: "upcoming",
      progress: 0,
      icon: <Eye className="w-6 h-6" />,
      items: [
        { text: "10,000 holder milestone", completed: false },
        { text: "Tier 1 exchange listings", completed: false },
        { text: "Partnership announcements", completed: false }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Utility",
      status: "planning",
      progress: 0,
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        { text: "FrogFare beta launch", completed: false },
        { text: "Mobile app development", completed: false },
        { text: "Staking rewards program", completed: false }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Expansion",
      status: "vision",
      progress: 0,
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        { text: "Multi-chain bridge", completed: false },
        { text: "DAO governance launch", completed: false },
        { text: "Real-world integrations", completed: false }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-[#0DB86A] text-white';
      case 'progress': return 'bg-[#FE751F] text-white';
      case 'upcoming': return 'bg-blue-500 text-white';
      case 'planning': return 'bg-purple-500 text-white';
      case 'vision': return 'bg-gray-500 text-white';
      default: return 'bg-gray-300 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'complete': return 'COMPLETE';
      case 'progress': return 'IN PROGRESS';
      case 'upcoming': return 'UPCOMING';
      case 'planning': return 'PLANNING';
      case 'vision': return 'VISION';
      default: return 'UNKNOWN';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-[#FFF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            🛣️ The Journey Ahead
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Follow DiDi's evolution from memecoin to transportation revolution
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FE751F] rounded-full"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                          {phase.quarter}: {phase.title}
                        </h3>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(phase.status)}`}>
                          {phase.icon}
                          <span className="ml-2">{getStatusText(phase.status)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {phase.progress > 0 && (
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#6B7280]">Progress</span>
                          <span className="text-[#FE751F] font-semibold">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#FE751F] to-[#0DB86A] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Items List */}
                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            item.completed ? 'bg-[#0DB86A]' : 'bg-gray-300'
                          }`}>
                            {item.completed && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`${
                            item.completed ? 'text-[#1A1A1A]' : 'text-[#6B7280]'
                          }`}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block w-6 h-6 bg-[#FE751F] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="flex-1 max-w-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;