import React, { useState } from 'react';
import { Twitter, MessageCircle, Users, Mail, ExternalLink, TrendingUp } from 'lucide-react';

const Community = () => {
  


  const socialStats = [
    {
      platform: 'Twitter/X',
      handle: '@DiDi_Memecoin',
      
      icon: <Twitter className="w-8 h-8" />,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      platform: 'Telegram',
      handle: 't.me/DiDiMemecoin',
   
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500'
    },
  
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

  const recentUpdates = [
    {
      platform: 'Twitter',
      content: 'DiDi mascot design finalized! 🐸 Community voted and we listened...',
      time: '2 hours ago',
      engagement: '234 likes'
    },
    {
      platform: 'Telegram',
      content: 'Audit results are in! ✅ Zero critical issues found...',
      time: '5 hours ago',
      engagement: '89 replies'
    },
    {
      platform: 'Twitter',
      content: 'Liquidity pool setup in progress. Launch countdown: 21 days! 🚀',
      time: '1 day ago',
      engagement: '412 likes'
    }
  ];

  return (
    <section id="community" className="py-24 bg-[#FFF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            📲 Join the DiDi Community
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Connect with fellow riders, get the latest updates, and be part of the transportation revolution
          </p>
        </div>

        {/* Social Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-[#FE751F]">{social.followers}</div>
                  <div className="text-sm text-[#6B7280]">
                    {social.platform === 'Discord' ? 'Coming Soon' : 'Members'}
                  </div>
                </div>
                <button className={`${social.color} ${social.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}>
                  <span>{social.platform === 'Discord' ? 'Get Notified' : 'Join Now'}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
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

        {/* Recent Updates */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A1A1A] text-center mb-8">
            Latest Community Updates
          </h3>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-[#FE751F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {update.platform}
                      </span>
                      <span className="text-[#6B7280] text-sm">{update.time}</span>
                    </div>
                    <p className="text-[#1A1A1A] font-medium mb-2">{update.content}</p>
                    <div className="flex items-center space-x-2 text-[#0DB86A] text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{update.engagement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Community;