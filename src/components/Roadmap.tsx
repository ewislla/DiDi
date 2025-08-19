import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCoins, FaChartLine, FaUsers, FaStar } from 'react-icons/fa6';

const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      id: 1,
      icon: <FaRocket className="w-6 h-6" />,
      title: "Launch on Solana",
      description: "The meme chain of legends"
    },
    {
      id: 2,
      icon: <FaCoins className="w-6 h-6" />,
      title: "Start with 25 SOL",
      description: "Pure frog-fueled liquidity"
    },
    {
      id: 3,
      icon: <FaChartLine className="w-6 h-6" />,
      title: "List on Pump.fun",
      description: "Let the chaos begin"
    },
    {
      id: 4,
      icon: <FaUsers className="w-6 h-6" />,
      title: "Watch degens ape",
      description: "Like it's 2021"
    },
    {
      id: 5,
      icon: <FaStar className="w-6 h-6" />,
      title: "Profit? No. FrogFare.",
      description: "The ultimate destination"
    }
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-32 relative bg-[#EA9105] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wider">
            The $DIDI Road to Glory
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            We're not here to rug. We're here to ride.
          </p>
        </motion.div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="flex justify-between items-center relative">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                    <div className="text-center">
                      <div className="bg-yellow-400 text-orange-600 rounded-full p-3 inline-flex mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-white font-black text-lg mb-2 uppercase">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-white/80 text-sm">{step.description}</p>
                    </div>
                  </div>
                  {/* Connection Point */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-10 w-4 h-4 bg-yellow-400 rounded-full border-4 border-orange-600"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-yellow-400 text-orange-600 rounded-full p-3 flex-shrink-0">
                  {step.icon}
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 flex-1">
                  <h3 className="text-white font-black text-lg mb-2 uppercase">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
