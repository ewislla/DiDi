import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import SectionDivider from './components/SectionDivider';

function App() {
  useEffect(() => {
    // Update document title
    document.title = '$DIDI - Ride to Earn Memecoin on Solana';
    
    // Add grain texture background
    document.body.style.backgroundColor = '#FF741F';
    document.body.style.backgroundImage = `
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)
    `;
    document.body.style.backgroundSize = '50px 50px, 60px 60px, 40px 40px';
    document.body.style.backgroundPosition = '0 0, 30px 30px, 15px 15px';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      
      <SectionDivider />
      <About />
      
      <SectionDivider flip />
      <Roadmap />
      
      <SectionDivider />
      <Tokenomics />
      
      <SectionDivider flip />
      <HowToBuy />
      
      <SectionDivider />
      <FAQ />
      
      <SectionDivider flip />
      <FinalCTA />
    </div>
  );
}

export default App;