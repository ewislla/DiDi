import React from 'react';
import { Shield, Lock, TrendingUp, Users, Copy, ExternalLink } from 'lucide-react';

const Tokenomics = () => {
  const contractAddress = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const metrics = [
    { label: "Total Supply", value: "500B", subtext: "$DiDi", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Liquidity", value: "15 SOL", subtext: "🔒 Locked", icon: <Lock className="w-6 h-6" /> },
    { label: "Market Cap", value: "Live", subtext: "📈 Chart", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Ownership", value: "Renounced", subtext: "Immutable", icon: <Shield className="w-6 h-6" /> },
    { label: "Team Tokens", value: "6mo Vest", subtext: "Gradual", icon: <Users className="w-6 h-6" /> },
    { label: "Burn Rate", value: "1% per tx", subtext: "Deflationary", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const trustIndicators = [
    {
      title: "LP Burned",
      description: "Liquidity permanently locked on Raydium",
      status: "verified"
    },
    {
      title: "Ownership Renounced",
      description: "Contract cannot be modified",
      status: "verified"
    },
    {
      title: "Team Vesting",
      description: "6-month linear unlock prevents dumps",
      status: "verified"
    },
    {
      title: "Audit Complete",
      description: "Security verified by CertiK",
      status: "verified"
    },
    {
      title: "Transparent",
      description: "All transactions publicly viewable",
      status: "verified"
    }
  ];

  return (
    <section id="tokenomics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            🧮 Tokenomics Dashboard
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Complete transparency. Zero surprises. Pure community ownership.
          </p>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFF4E6] to-white p-6 rounded-2xl border-2 border-[#FE751F]/20 hover:border-[#FE751F] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[#FE751F] mb-3">
                {metric.icon}
              </div>
              <div className="text-sm text-[#6B7280] mb-1">{metric.label}</div>
              <div className="text-2xl font-bold text-[#1A1A1A] mb-1">{metric.value}</div>
              <div className="text-sm text-[#0DB86A]">{metric.subtext}</div>
            </div>
          ))}
        </div>

        {/* Contract Information */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-16 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Contract Address</h3>
          <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
            <code className="text-sm md:text-base font-mono break-all">{contractAddress}</code>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => copyToClipboard(contractAddress)}
                className="p-2 bg-[#FE751F] hover:bg-[#E5651C] rounded-lg transition-colors duration-200"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
              <a
                href={`https://solscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0DB86A] hover:bg-[#059669] rounded-lg transition-colors duration-200"
                title="View on Solscan"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-300 mt-4">
            ⚠️ Always verify this address before purchasing. Beware of scam tokens!
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1A1A1A] text-center mb-8">
            🛡️ Trust & Security
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-[#FFF4E6] p-6 rounded-2xl border-l-4 border-[#0DB86A] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#0DB86A] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{indicator.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{indicator.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Chart Placeholder */}
        <div className="bg-gradient-to-r from-[#FE751F] to-[#0DB86A] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Token Distribution</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">Liquidity Pool</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10%</div>
              <div className="text-sm opacity-90">Team (Vested)</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3%</div>
              <div className="text-sm opacity-90">Marketing</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2%</div>
              <div className="text-sm opacity-90">Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;