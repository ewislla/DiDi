import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
// import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = '$DiDi Memecoin - Ride to Earn | The Frog Who Rides';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join the DiDi revolution! The community-driven memecoin disrupting ride-sharing. Ride to earn, not to pay. Built on Solana with locked liquidity and renounced contract.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join the DiDi revolution! The community-driven memecoin disrupting ride-sharing. Ride to earn, not to pay. Built on Solana with locked liquidity and renounced contract.';
      document.head.appendChild(meta);
    }

    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <Roadmap /> */}
        <Tokenomics />
        <HowToBuy />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;