import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 11,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between pt-24 px-6 overflow-hidden bg-[#EA9105] font-['Helvetica_Rounded','Nunito',sans-serif]"
    >
      {/* Transparent background mascot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
        <img
          src="/assets/hero.png"
          alt="Background mascot"
          className="w-[500px] lg:w-[600px]"
        />
      </div>

      {/* Left side: text + buttons */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-wide leading-tight">
          $DIDI — RIDE TO EARN
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-4">
          Why pay for the ride when you could earn while moving?
        </p>
        <p className="text-base md:text-lg text-white/80 mb-6">
          The turbo-charged memecoin that turns every trip into a win.
        </p>
        <p className="text-xl md:text-2xl font-bold text-white mb-8">
          Launching in 2 weeks — buckle up, degen.
        </p>

        {/* Countdown */}
        <div className="mb-8 flex justify-center md:justify-start space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/30 shadow-lg">
                <div className="text-2xl md:text-4xl lg:text-6xl font-black text-white">
                  {String(value).padStart(2, "0")}
                </div>
              </div>
              <div className="text-xs md:text-sm text-white/80 mt-2 uppercase font-semibold">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <a
            href="https://t.me/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#EA9105] px-8 py-4 rounded-full text-lg font-black uppercase tracking-wider hover:scale-105 transform transition-all duration-300 hover:shadow-2xl flex items-center justify-center space-x-3"
          >
            <FaTelegram className="w-6 h-6" />
            <span>Join Telegram</span>
          </a>
          <a
            href="https://x.com/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-black uppercase tracking-wider hover:bg-white hover:text-[#EA9105] transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
          >
            <FaXTwitter className="w-6 h-6" />
            <span>Follow on X</span>
          </a>
        </div>
      </div>

      {/* Right side: Main mascot driving in */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 3, ease: "easeOut" }}
        className="relative z-10 mt-12 md:mt-0 flex justify-center md:justify-end w-full md:w-auto order-first md:order-last"
      >
        <img
          src="/assets/about.png"
          alt="$DIDI mascot"
          className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;