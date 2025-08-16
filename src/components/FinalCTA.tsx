import React from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaTwitter, FaArrowRight } from "react-icons/fa6";
import heroImage from "/assets/hero.png"; // make sure this path is correct

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-[#EA9105]">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 opacity-20"
          animate={{ x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-wider">
            The ride is starting
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider">
            The meter's running
          </h3>
          <p className="text-2xl md:text-3xl font-bold text-yellow-300 uppercase tracking-wider">
            Get in, degen
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/30">
              <img
                src={heroImage}
                alt="DIDI hero"
                className="w-64 md:w-96 lg:w-[500px] mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="bg-white text-orange-500 px-10 py-5 rounded-full text-xl font-black uppercase tracking-wider hover:scale-105 transform transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-3">
            <FaTelegram className="w-6 h-6" />
            <span>Join Telegram</span>
            <FaArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-black uppercase tracking-wider hover:bg-white hover:text-orange-500 transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
            <FaTwitter className="w-6 h-6" />
            <span>Follow on X</span>
            <FaArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-white/70 text-sm uppercase tracking-wider mb-4">
            Don't miss the ride.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;