import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative bg-[#EA9105] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Illustration - now on LEFT */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Mascot Image */}
              <img 
                src="/assets/hero.png" 
                alt="$DIDI mascot" 
                className="w-64 md:w-80 lg:w-[400px] drop-shadow-2xl"
              />

              {/* Floating crypto logos */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-purple-600 rounded-full px-4 py-2 text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                SOL
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-green-600 rounded-full px-4 py-2 text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
               Pump.fun
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - now on RIGHT */}
          <motion.div 
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider">
              What is $DIDI?
            </h2>
            
            <div className="space-y-6 text-white/90">
              <p className="text-lg md:text-xl leading-relaxed">
                $DIDI is the turbo-charged meme token that fuels the future of ride-sharing — 
                with less corporate greed and more community speed.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Every ride, vibe, and roadside snack stop is now a chance to earn, meme, 
                and move the world forward.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-yellow-300">
                Think Uber. But powered by blockchain, memes, and community vibes.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-white">
                Hop in — we're taking this ride straight to decentralization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
