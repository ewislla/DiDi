import React from 'react';
import { Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "No corporate overlords, just pure community power driving the future of transportation"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Meme Economy",
      description: "Culture over corporations, vibes over venture capital. Built by the community, for the community"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Speed",
      description: "Built on Solana for instant, cheap transactions. No more waiting, just pure speed"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Meet $DiDi: The Rebel Frog Disrupting Rides
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#6B7280] leading-relaxed">
            <p>
              $DiDi coin is the turbo-charged meme token that fuels the future of ride-sharing  with less corporate greed and more community speed.




            </p>
            <p>
              We're on a mission to turn every ride, vibe, and roadside snack stop into a chance to earn, meme, and move the world forward.
Think Uber  but powered by blockchain, bad jokes, and better vibes.
Hop in  we're taking this Lambo straight to decentralization!
            </p>
          </div>
          <button className="mt-8 group bg-[#FE751F] hover:bg-[#E5651C] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Join the Ride
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#FFF4E6] hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-[#FE751F]"
            >
              <div className="text-[#FE751F] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#FE751F] to-[#0DB86A] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15.2K+</div>
              <div className="text-sm opacity-90">Twitter Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8.9K+</div>
              <div className="text-sm opacity-90">Telegram Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500B</div>
              <div className="text-sm opacity-90">Total Supply</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Community Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;