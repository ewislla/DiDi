import React, { useState } from 'react';
import { Wallet, DollarSign, RefreshCw, ArrowRight, Shield, ExternalLink } from 'lucide-react';

const HowToBuy = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Setup Wallet",
      icon: <Wallet className="w-8 h-8" />,
      description: "Get a Solana-compatible wallet",
      details: "Recommended: Phantom, Solflare, or Backpack",
      action: "Download Phantom",
      secondaryAction: "Other Wallets"
    },
    {
      number: 2,
      title: "Fund Wallet",
      icon: <DollarSign className="w-8 h-8" />,
      description: "Purchase SOL from any major exchange",
      details: "Transfer to your wallet address",
      action: "Buy SOL Guide",
      secondaryAction: "CEX List"
    },
    {
      number: 3,
      title: "Access DEX",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Visit Raydium decentralized exchange",
      details: "Connect your wallet securely",
      action: "Open Raydium",
      secondaryAction: "Connect Guide"
    },
    {
      number: 4,
      title: "Swap Tokens",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Paste DiDi contract address",
      details: "Set slippage: 3-5% recommended",
      action: "Copy Contract",
      secondaryAction: "Slippage Guide"
    },
    {
      number: 5,
      title: "HODL & Ride!",
      icon: <ArrowRight className="w-8 h-8" />,
      description: "Congratulations! You're now a DiDi rider",
      details: "Join our community for updates",
      action: "Join Telegram",
      secondaryAction: "Follow Twitter"
    }
  ];

  const safetyTips = [
    {
      icon: "⚠️",
      title: "ONLY use official contract address",
      description: "Always verify the address matches our official channels"
    },
    {
      icon: "⚠️",
      title: "Verify on multiple block explorers",
      description: "Check Solscan and SolanaFM before purchasing"
    },
    {
      icon: "⚠️",
      title: "Never share private keys",
      description: "Legitimate sites never ask for your seed phrase"
    },
    {
      icon: "⚠️",
      title: "Start with small amounts",
      description: "Test with a small purchase first to familiarize yourself"
    }
  ];

  return (
    <section id="buy" className="py-24 bg-[#FFF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            🛒 How to Buy $DiDi
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Follow our step-by-step guide to join the DiDi revolution safely and securely
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 p-2 bg-white rounded-2xl shadow-lg">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeStep === step.number
                    ? 'bg-[#FE751F] text-white shadow-lg'
                    : 'text-[#6B7280] hover:text-[#FE751F]'
                }`}
              >
                Step {step.number}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Display */}
        <div className="max-w-4xl mx-auto mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`transition-all duration-500 ${
                activeStep === step.number ? 'block' : 'hidden'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#FE751F] text-white p-3 rounded-full">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-lg">{step.description}</p>
                  </div>
                </div>

                <div className="bg-[#FFF4E6] rounded-xl p-6 mb-6">
                  <p className="text-[#1A1A1A] text-lg font-medium">{step.details}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#0DB86A] hover:bg-[#059669] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>{step.action}</span>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="bg-transparent border-2 border-[#6B7280] text-[#6B7280] hover:border-[#FE751F] hover:text-[#FE751F] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    {step.secondaryAction}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className="px-6 py-3 bg-gray-200 text-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-all duration-300"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
            disabled={activeStep === 5}
            className="px-6 py-3 bg-[#FE751F] text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E5651C] transition-all duration-300"
          >
            Next
          </button>
        </div>

        {/* Safety Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-bold text-red-800">Safety First!</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h4 className="font-bold text-red-800 mb-1">{tip.title}</h4>
                  <p className="text-red-700 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;