import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { smoothScrollTo } from '../../utils/scrollUtils';
import { NAV_ITEMS, EXTERNAL_LINKS } from '../../constants/index.js';

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
                    {NAV_ITEMS.map((item) => (
                        <a key={item.href} href={item.href} onClick={(e) => handleScroll(e, item.href)}>{item.label}</a>
                    ))}
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                </nav>

                <div className="nav-actions">
                    <Button
                        variant="primary"
                        href={EXTERNAL_LINKS.CALENDAR}
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
                    {NAV_ITEMS.map((item) => (
                        <a key={item.href} href={item.href} onClick={(e) => handleScroll(e, item.href)}>{item.label}</a>
                    ))}
                    <div className="mobile-actions">
                        <Button
                            variant="primary"
                            href={EXTERNAL_LINKS.CALENDAR}
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
