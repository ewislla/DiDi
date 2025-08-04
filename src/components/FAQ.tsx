import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, TrendingUp, Settings, DollarSign, Shield } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: '🔍' },
    { id: 'popular', name: 'Popular', icon: '🔥' },
    { id: 'technical', name: 'Technical', icon: '⚙️' },
    { id: 'trading', name: 'Trading', icon: '💸' },
    { id: 'security', name: 'Security', icon: '🛡️' }
  ];

  const faqData = [
    {
      category: 'popular',
      question: 'When exactly does DiDi launch?',
      answer: 'DiDi is set to launch in Q1 2025. We\'re currently in the final stages of liquidity pool setup and marketing campaign preparation. Follow our social channels for exact launch announcements.'
    },
    {
      category: 'popular',
      question: 'How do I avoid scam tokens?',
      answer: 'Always use our official contract address: 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU. Verify this address on multiple block explorers and only purchase through official channels. Never trust DMs or unofficial links.'
    },
    {
      category: 'popular',
      question: 'What\'s the total supply and tokenomics?',
      answer: 'Total supply is 500 billion DiDi tokens. 85% goes to liquidity pool, 10% to team (6-month vesting), 3% for marketing, and 2% for development. The contract is renounced and liquidity is permanently locked.'
    },
    {
      category: 'popular',
      question: 'Is the team doxxed?',
      answer: 'The core team remains pseudonymous, which is standard in the memecoin space. However, we\'ve implemented maximum transparency through renounced contracts, locked liquidity, and public vesting schedules.'
    },
    {
      category: 'technical',
      question: 'What blockchain is DiDi built on?',
      answer: 'DiDi is built on Solana blockchain, chosen for its lightning-fast transactions, low fees, and robust DeFi ecosystem. This ensures smooth trading and minimal transaction costs for our community.'
    },
    {
      category: 'technical',
      question: 'How does the vesting schedule work?',
      answer: 'Team tokens (10% of supply) are locked in a smart contract with linear vesting over 6 months. This prevents large dumps and ensures team alignment with long-term project success.'
    },
    {
      category: 'technical',
      question: 'Can the contract be upgraded?',
      answer: 'No, the contract ownership has been renounced, making it completely immutable. No one can modify the contract, mint new tokens, or change any parameters. This ensures complete decentralization.'
    },
    {
      category: 'trading',
      question: 'Where can I buy DiDi?',
      answer: 'DiDi will be available on Raydium DEX at launch. We\'re also working on listings with major centralized exchanges for Q2 2025. Always use official links and verify contract addresses.'
    },
    {
      category: 'trading',
      question: 'What\'s the minimum purchase?',
      answer: 'There\'s no minimum purchase amount. You can buy any amount of DiDi tokens, though consider network fees when making very small purchases. We recommend starting with a small test amount.'
    },
    {
      category: 'trading',
      question: 'When will it hit major exchanges?',
      answer: 'We\'re targeting tier 1 exchange listings for Q2 2025. This depends on community growth, trading volume, and meeting exchange requirements. Community support is crucial for exchange adoption.'
    },
    {
      category: 'security',
      question: 'Is this a rug pull?',
      answer: 'No. We\'ve implemented multiple safeguards: renounced contract ownership, burned liquidity pool tokens, public team vesting, and completed security audits. These make rug pulls technically impossible.'
    },
    {
      category: 'security',
      question: 'How can I verify the contract?',
      answer: 'Visit Solscan.io and enter our contract address. You can verify ownership is renounced, liquidity is locked, and all transactions are transparent. We also provide links to our audit reports.'
    },
    {
      category: 'security',
      question: 'What audits have been completed?',
      answer: 'Our smart contract has been audited by CertiK, a leading blockchain security firm. The audit covers potential vulnerabilities, tokenomics implementation, and overall security architecture.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Get answers to common questions about DiDi, from basics to advanced topics
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FE751F] focus:outline-none text-lg"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-[#FE751F] text-white shadow-lg'
                  : 'bg-[#FFF4E6] text-[#1A1A1A] hover:bg-[#FE751F] hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFF4E6] rounded-xl border-2 border-transparent hover:border-[#FE751F] transition-all duration-300"
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-[#1A1A1A] pr-4">
                  {faq.question}
                </h3>
                {openQuestion === index ? (
                  <ChevronUp className="w-5 h-5 text-[#FE751F] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-4">
                  <div className="pt-4 border-t border-[#FE751F]/20">
                    <p className="text-[#6B7280] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">No questions found</h3>
            <p className="text-[#6B7280] mb-6">
              Try adjusting your search or check a different category
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-[#FE751F] hover:bg-[#E5651C] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 opacity-90">
            Join our community or reach out directly for personalized support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#FE751F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Join Telegram
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;