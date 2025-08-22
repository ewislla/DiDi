import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer: React.FC = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "How to Buy", href: "#howtobuy" },
    { name: "Whitepaper", href: "/assets/$DIDI Whitepaper.pdf", download: true },
  ];

  const socials = [
    { icon: <FaTwitter className="w-6 h-6" />, href: "https://twitter.com" },
    { icon: <FaInstagram className="w-6 h-6" />, href: "https://instagram.com" },
    { icon: <FaTelegram className="w-6 h-6" />, href: "https://t.me" },
  ];

  return (
    <footer className="bg-[#EA9105] py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
            $DIDI
          </h2>
          <p className="text-white/90">
            Turbo-charged meme token driving the ride-sharing revolution. 
            Less corporate greed, more community vibes.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-2 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  {...(link.download && { download: true })}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-4 uppercase">
            Connect
          </h3>
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-16 border-t border-white/20 pt-6 text-center text-white/70 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} $DIDI. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
