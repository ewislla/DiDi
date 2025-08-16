import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFire, FaUsers, FaShieldAlt } from "react-icons/fa";

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
      icon: <FaFire className="w-6 h-6" />
    },
    {
      id: 2,
      label: "Community",
      value: "Community-focused",
      percentage: 35,
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      icon: <FaUsers className="w-6 h-6" />
    },
    {
      id: 3,
      label: "Ownership",
      value: "Renounced",
      percentage: 25,
      color: "text-green-400",
      bgColor: "bg-green-400",
      icon: <FaShieldAlt className="w-6 h-6" />
    }
  ];

  return (
    <section
      id="tokenomics"
      className="py-20 lg:py-32 relative bg-[#EA9105] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider">
            Tokenomics
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats */}
          <motion.div
            className="animate-fade-in-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase">
                Token Details
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/20">
                  <span className="text-white/80 text-lg">Total Supply:</span>
                  <span className="text-white font-bold text-lg">
                    500,000,000,000
                  </span>
                </div>

                {tokenData.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b border-white/20 hover:bg-white/5 rounded-lg px-4 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredSection(item.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${item.color}`}>{item.icon}</div>
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
          </motion.div>

          {/* Visual Chart with image */}
          <motion.div
            className="animate-fade-in-right flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 text-center">
                <div className="relative mx-auto w-64 h-64 mb-8">
                  {/* Replace pie chart with image */}
                  <motion.img
                    src="/assets/token.jpeg"
                    alt="$DIDI Circle"
                    className="w-full h-full object-contain rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>

                <div className="space-y-4">
                  {tokenData.map((item) => (
                    <motion.div
                      key={item.id}
                      className={`flex items-center justify-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        hoveredSection === item.id ? "bg-white/20 scale-105" : "bg-white/5"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`w-4 h-4 rounded-full ${item.bgColor}`}></div>
                      <span className="text-white font-semibold">{item.label}</span>
                      <span className="text-white/70">({item.percentage}%)</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Optional floating icons */}
              <motion.div
                className="absolute -top-8 -right-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <FaFire className="w-10 h-10 text-red-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <FaUsers className="w-10 h-10 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;