import React from 'react';
import { Twitter, MessageCircle, ExternalLink, Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Telegram', icon: <MessageCircle className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@didimemecoin.com' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'How to Buy', href: '#buy' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Community', href: '#community' }
  ];

  const legalLinks = [
    { name: 'Whitepaper', icon: <FileText className="w-4 h-4" />, href: '#' },
    { name: 'Audit Report', icon: <Shield className="w-4 h-4" />, href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🐸</span>
              <span className="text-2xl font-bold">DiDi</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The community-driven memecoin revolutionizing transportation. 
              Ride to earn, not to pay.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 hover:bg-[#FE751F] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FE751F] transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FE751F] transition-colors duration-300 flex items-center space-x-2 hover:underline"
                  >
                    {link.icon && link.icon}
                    <span>{link.name}</span>
                    {link.name.includes('Report') || link.name.includes('Whitepaper') ? (
                      <ExternalLink className="w-3 h-3" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contract</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Solana Address:</p>
                <code className="bg-gray-800 p-2 rounded text-xs break-all block">
                  7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU
                </code>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#0DB86A] rounded-full"></span>
                  <span className="text-sm text-gray-300">LP Burned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#0DB86A] rounded-full"></span>
                  <span className="text-sm text-gray-300">Ownership Renounced</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#0DB86A] rounded-full"></span>
                  <span className="text-sm text-gray-300">Audit Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} DiDi Memecoin. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with 💚 by the DiDi community
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> DiDi is a memecoin created for entertainment purposes. 
              Cryptocurrency investments carry high risk and may result in loss of capital. 
              This is not financial advice. Always do your own research and never invest more than you can afford to lose. 
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;