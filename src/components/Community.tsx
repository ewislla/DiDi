import React from 'react';
import { Twitter, MessageCircle, ExternalLink } from 'lucide-react';

const Community = () => {
  const socialStats = [
    {
      platform: 'Twitter/X',
      handle: '@DiDi_coin',
      link: 'https://x.com/didi_coin?s=21',
      icon: <Twitter className="w-8 h-8" />,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      platform: 'Telegram',
      handle: '@DiDi_Coin',
      link: 'http://t.me/DiDi_Coin',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500'
    }
  ];

  const communityFeatures = [
    {
      title: 'Daily Alpha',
      description: 'Get exclusive insights and early news',
      icon: '📈'
    },
    {
      title: 'Meme Contests',
      description: 'Win DiDi tokens for the best memes',
      icon: '🎨'
    },
    {
      title: 'AMA Sessions',
      description: 'Weekly Q&A with the team',
      icon: '🎤'
    },
    {
      title: 'Community Rewards',
      description: 'Earn tokens for active participation',
      icon: '🎁'
    }
  ];

  return (
    <section id="community" className="py-24 bg-[#FFF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            📲 Join the DiDi Community
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Connect with fellow riders, get the latest updates, and be part of the transportation revolution
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 justify-center">
          {socialStats.map((social, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${social.color} text-white p-4 rounded-2xl inline-block mb-6`}>
                {social.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                {social.platform}
              </h3>
              <p className="text-[#6B7280] mb-4">{social.handle}</p>
              <div className="flex justify-end">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} ${social.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
                >
                  <span>Join Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A1A1A] text-center mb-8">
            What You'll Get
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h4>
                <p className="text-[#6B7280] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
