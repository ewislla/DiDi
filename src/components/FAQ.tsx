import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: "What makes $DIDI different from other memecoins?",
      answer: "$DIDI combines the viral energy of meme culture with real utility in the ride-sharing space. We're not just another frog token - we're building a community-driven ecosystem that rewards participation and engagement."
    },
    {
      id: 1,
      question: "Is this project safe? Any rugs planned?",
      answer: "Absolutely not! All LP tokens will be burned at launch, ownership will be renounced, and everything is transparent. We're here for the long ride, not a quick cash grab."
    },
    {
      id: 2,
      question: "When exactly does $DIDI launch?",
      answer: "Launch is scheduled for exactly 2 weeks from today. Keep watching the countdown timer and join our Telegram for real-time updates!"
    },
    {
      id: 3,
      question: "How do I stay updated on launch details?",
      answer: "Join our Telegram community and follow us on X/Twitter. We'll announce all launch details, contract addresses, and trading information there first."
    },
    {
      id: 4,
      question: "What's the total supply and tokenomics?",
      answer: "Total supply is 500 billion tokens. LP tokens are burned, ownership renounced, and distribution is fully community-focused. No team tokens, no presale - pure degen vibes."
    },
    {
      id: 5,
      question: "Why Solana over other chains?",
      answer: "Solana is the ultimate meme chain - fast, cheap, and perfect for high-frequency trading. Plus, the Solana community knows how to make memecoins moon!"
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-wider animate-fade-up">
            FAQ
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Got questions? We've got answers, degen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                >
                  <h3 className="text-white font-bold text-lg md:text-xl pr-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className="text-yellow-400 transform transition-transform duration-300">
                      {openFAQ === faq.id ? (
                        <ChevronDown className="w-6 h-6 rotate-180" />
                      ) : (
                        <ChevronRight className="w-6 h-6" />
                      )}
                    </div>
                    <div className="text-2xl ml-4">🐸</div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 border-t border-white/10">
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Frog */}
        <div className="text-center mt-12">
          <div className="text-6xl animate-bounce">🐸</div>
          <p className="text-white/60 text-sm mt-2 uppercase tracking-wider">
            Still have questions? Join the Telegram!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;