import React, { useState, useEffect } from 'react';
import { CarIcon, CoinsIcon } from 'lucide-react';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <CoinsIcon className="w-10 h-10 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute top-40 right-16 animate-float-delayed">
          <CoinsIcon className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <CoinsIcon className="w-12 h-12 text-yellow-200 opacity-50" />
        </div>
        <div className="absolute top-60 right-32 animate-float-delayed">
          <CarIcon className="w-14 h-14 text-white opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-wider animate-fade-up">
          $DIDI — RIDE TO EARN
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto animate-fade-up-delay-1">
          Why pay for the ride when you could earn while moving?
        </p>
        <p className="text-base md:text-lg text-white/80 mb-6 max-w-3xl mx-auto animate-fade-up-delay-2">
          The turbo-charged memecoin that turns every trip into a win.
        </p>
        <p className="text-xl md:text-2xl font-bold text-white animate-fade-up-delay-3">
          🚦 Launching in 2 weeks — buckle up, degen.
        </p>

        {/* Hero Image / Frog Art */}
        <div className="my-12 flex justify-center animate-fade-up-delay-3">
          <img
            src="/assets/hero.png" // replace with your $DIDI frog/coin art
            alt="$DIDI mascot"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl rounded-3xl"
          />
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-up-delay-4">
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/30 shadow-lg">
                  <div className="text-2xl md:text-4xl lg:text-6xl font-black text-white">
                    {String(value).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-2 uppercase font-semibold">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up-delay-5">
          <a
            href="https://t.me/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-black uppercase tracking-wider hover:scale-105 transform transition-all duration-300 hover:shadow-2xl flex items-center space-x-3"
          >
            <FaTelegram className="w-6 h-6" />
            <span>Join Telegram</span>
          </a>
          <a
            href="https://x.com/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-black uppercase tracking-wider hover:bg-white hover:text-orange-500 transform transition-all duration-300 hover:scale-105 flex items-center space-x-3"
          >
            <FaXTwitter className="w-6 h-6" />
            <span>Follow on X</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;