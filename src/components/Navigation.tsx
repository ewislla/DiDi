import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Clock, Users, MessageCircle, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 21, hours: 4, minutes: 32, seconds: 18 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🐸</div>
            <span className="text-xl font-bold text-[#1A1A1A]">$DiDi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About','Community' ,'Tokenomics', 'Buy', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#1A1A1A] hover:text-[#FE751F] transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE751F] transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Community Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-[#1A1A1A] hover:text-[#FE751F] transition-colors duration-200 font-medium group"
              >
                <span>Community</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE751F] transition-all duration-200 group-hover:w-full"></span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    <a href="http://t.me/DiDi_Coin" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-4 h-4 text-[#0088cc]" />
                        <span className="font-medium">Telegram</span>
                      </div>
                      
                    </a>
                    <a href="https://x.com/didi_coin?s=21" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
                      <div className="flex items-center space-x-3">
                        <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                        <span className="font-medium">Twitter/X</span>
                      </div>
                      
                    </a>
                    
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Launch Timer */}
          <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <Clock className="w-4 h-4" />
            <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
          >
            <div className="relative">
              <Menu className={`w-5 h-5 text-[#1A1A1A] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`w-5 h-5 text-[#1A1A1A] absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl mt-4 mb-4 shadow-xl border border-gray-100 overflow-hidden">
            {/* Launch Timer - Mobile */}
            <div className="bg-gradient-to-r from-[#FE751F] to-[#0DB86A] text-white p-4 flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">Launch in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
            </div>
            
            {/* Navigation Items */}
            <div className="p-2">
              {['About', 'Community', 'Tokenomics', 'Buy', 'FAQ'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-4 text-[#1A1A1A] hover:bg-gray-50 transition-all duration-200 rounded-xl font-medium border-b border-gray-50 last:border-b-0 hover:text-[#FE751F] group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    <div className="w-2 h-2 bg-[#FE751F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </button>
              ))}
              
              {/* Community Section - Mobile */}
              <div className="px-4 py-4 border-t border-gray-100 mt-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Community</h3>
                <div className="space-y-2">
                  <a href="http://t.me/DiDi_Coin" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-4 h-4 text-[#0088cc]" />
                      <span className="font-medium">Telegram</span>
                    </div>
                    <span className="text-sm text-[#0DB86A] font-medium"></span>
                  </a>
                  <a href="https://x.com/didi_coin?s=2" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                      <span className="font-medium">Twitter/X</span>
                    </div>
                    
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;