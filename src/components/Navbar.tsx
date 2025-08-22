import React, { useState } from 'react';
import { FaBars, FaXmark, FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Roadmap/Plan', href: '#roadmap' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'How to Buy', href: '#howtobuy' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Whitepaper', href: '/assets/$DIDI Whitepaper.pdf', download: true },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#EA9105] text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="font-extrabold text-xl tracking-wide">
          $DIDI
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.download && { download: true })}
              className="hover:text-yellow-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open menu">
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#EA9105] text-white z-50 transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}
      >
        <div className="absolute top-4 right-6">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FaXmark size={26} />
          </button>
        </div>

        {/* Centered Nav Links */}
        <div className="h-full flex flex-col items-center justify-center gap-8 text-2xl font-bold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.download && { download: true })}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons at Bottom */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-6 text-2xl">
          <a
            href="https://x.com/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/DiDi_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
