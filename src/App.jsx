import React, { useState } from 'react';
import DNAHeroBackground from './components/sections/DNAHeroBackground';
import JourneyModal from './components/ui/JourneyModal';
import './styles/base.css';
import './styles/components.css';
import logo from './assets/logo.svg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="landing-hero-container">
      {/* Background */}
      <div className="landing-hero-bg">
        <DNAHeroBackground />
      </div>

      {/* Content Overlay */}
      <div className="landing-hero-overlay">
        
        <div className="landing-hero-main-content">
          {/* Logo */}
          <div className="landing-hero-logo-container">
            <img src={logo} alt="Perselence Logo" className="landing-hero-logo" />
          </div>

          {/* Subheadlines */}
          <div className="landing-hero-text-container">
            <h1 className="landing-hero-title">
              Your trusted partner in AI and digital transformation
            </h1>
            <p className="landing-hero-description">
              From early ideas to trusted delivery, we help turn opportunities into practical solutions.
            </p>
          </div>

          {/* CTA Button */}
          <div className="landing-hero-cta">
            <button 
              className="landing-hero-btn" 
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="landing-hero-footer">
          &copy; 2026 PERSELENCE
        </div>

      </div>

      {/* Modal */}
      <JourneyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
