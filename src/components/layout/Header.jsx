import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

import { smoothScrollTo } from '../../utils/scrollUtils';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        if (smoothScrollTo(e, targetId)) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <Container className="nav-container">
                <a href="/" className="logo">
                    <img src="/assets/Logo.svg" alt="Perselence logo" className="logo-img" />
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <a href="#solutions" onClick={(e) => handleScroll(e, '#solutions')}>Services</a>
                    <a href="#features" onClick={(e) => handleScroll(e, '#features')}>How it works</a>
                    <a href="#engagements" onClick={(e) => handleScroll(e, '#engagements')}>Case Studies</a>
                    <a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')}>Testimonials</a>
                    <a href="#about-us" onClick={(e) => handleScroll(e, '#about-us')}>About Us</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                </nav>

                <div className="nav-actions">
                    <Button
                        variant="primary"
                        href="https://calendar.app.google/e2gg9wJrbADe7rPFA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a call
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <a href="#solutions" onClick={(e) => handleScroll(e, '#solutions')}>Services</a>
                    <a href="#features" onClick={(e) => handleScroll(e, '#features')}>How it works</a>
                    <a href="#engagements" onClick={(e) => handleScroll(e, '#engagements')}>Case Studies</a>
                    <a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')}>Testimonials</a>
                    <a href="#about-us" onClick={(e) => handleScroll(e, '#about-us')}>About Us</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                    <div className="mobile-actions">
                        <Button
                            variant="primary"
                            href="https://calendar.app.google/e2gg9wJrbADe7rPFA"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book a call
                        </Button>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
