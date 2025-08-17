import { motion } from "framer-motion";

export default function Community() {
  return (
    <section className="relative bg-[#EA9105] text-white py-20 px-6 overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/about.png"
          alt="DIDI watermark"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          $DIDI — The Meme Taxi to the Moon
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
    
          $DIDI isn’t just another meme coin… it’s a movement.  
          We’re taking on Uber and the corporate giants with community power, memes, and zero surge pricing.
        </motion.p>

        {/* Why Join */}
        <motion.div
          className="bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg text-left max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">Why Join the Ride?</h3>
          <ul className="space-y-3 text-white/90">
            <li>80% supply → fair launch on Pump.fun</li>
            <li>15% set aside for airdrops + marketing</li>
            <li>Meme contests, raids & Riders Club rewards</li>
            <li>A growing tribe that lives for fun, rebellion, and moon vibes</li>
          </ul>
        </motion.div>

        {/* Closing statement */}
        <motion.p
          className="text-lg md:text-xl mb-10 text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Doge, Pepe, and Shiba are already waiting at the top —  
          The only question is: will you ride with us?
        </motion.p>

        {/* CTA buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://t.me/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-[#EA9105] font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white font-bold rounded-lg hover:bg-white/10 transition"
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
}