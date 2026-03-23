import React, { useState } from 'react';
import DNAHeroBackground from './components/sections/DNAHeroBackground';
import JourneyModal from './components/ui/JourneyModal';
import './styles/base.css';
import './styles/components.css';
import logo from './assets/logo.svg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app-container" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--color-bg)' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DNAHeroBackground />
      </div>

      {/* Content Overlay */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
        
        {/* Logo */}
        <div style={{ marginBottom: '3rem' }}>
          <img src={logo} alt="Perselence Logo" style={{ height: '55px', objectFit: 'contain' }} />
        </div>

        {/* Coming Soon Text Removed */}
        
        {/* Subheadlines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px' }}>
          <h1 className="hero-subtitle" style={{ fontSize: 'max(2.15rem, 2.8vw)', color: 'var(--color-text-main, #1A1A1A)', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
            Your trusted partner in AI and digital transformation
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: '#444444', lineHeight: 1.6 }}>
            From early ideas to trusted delivery, we help turn opportunities into practical solutions.
          </p>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '2.75rem' }}>
          <button 
            className="btn" 
            onClick={() => setIsModalOpen(true)}
            style={{ 
              backgroundColor: '#1A1A1A', 
              color: '#ffffff', 
              border: 'none', 
              padding: '1.3rem 3.2rem', 
              fontSize: '1.35rem',
              letterSpacing: '0.01em',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => { 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'; 
                e.currentTarget.style.backgroundColor = '#000000';
            }}
            onMouseOut={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; 
                e.currentTarget.style.backgroundColor = '#1A1A1A';
            }}
          >
            Start Your Journey
          </button>
        </div>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: '2rem', color: 'var(--color-text-muted, #8b9eb5)', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          &copy; 2026 PERSELENCE
        </div>

      </div>

      {/* Modal */}
      <JourneyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
