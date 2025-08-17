import React from "react";
import { Wallet, Download, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const HowToBuy: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Download className="w-12 h-12 text-white" />,
      title: "Get a Solana wallet",
      description: "Phantom or Solflare",
    },
    {
      id: 2,
      icon: <Wallet className="w-12 h-12 text-white" />,
      title: "Load up with SOL",
      description: "Fuel for the ride",
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      title: "On launch day, buy on Pump.fun",
      description: "When the gates open",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: "HODL and enjoy the ride",
      description: "Destination: Moon",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative bg-[#EA9105] overflow-hidden">
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
            How to Buy
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Buying $DIDI is easier than hailing a cab:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="text-center relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8 hover:bg-white/20 hover:scale-105 transform transition-all duration-300 cursor-pointer">
                {/* Step Number */}
                <div className="bg-yellow-400 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl mx-auto mb-6">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-black text-lg mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm">{step.description}</p>
              </div>

              {/* Connection Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-white/50 text-2xl">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Illustration / CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 inline-block">
            <Wallet className="w-16 h-16 text-white mx-auto mb-4" />
            <p className="text-white font-bold text-lg uppercase">
              Ready to hop in?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
