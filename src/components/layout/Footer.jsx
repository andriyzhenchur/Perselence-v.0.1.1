import React from 'react';
import Container from '../ui/Container';
import { smoothScrollTo } from '../../utils/scrollUtils';

const Footer = () => {
    const handleLinkClick = (e, targetId) => {
        smoothScrollTo(e, targetId);
    };

    return (
        <footer className="footer-wrapper">
            {/* Main Footer */}
            <div className="main-footer">
                <Container className="footer-grid">
                    <div className="footer-col">
                        <img src="/assets/Logo.svg" alt="Antigravity" className="footer-logo" />
                        <p className="footer-desc" style={{ marginBottom: '0.25rem' }}>
                            Modern Problems. Elegant Solutions.
                        </p>
                        <p className="footer-desc" style={{ fontSize: '0.875rem' }}>
                            Los Angeles, CA
                        </p>
                        <div className="footer-social">
                            <a href="/" aria-label="Calendly" className="footer-social-link">
                                <img src="/assets/calendly.svg" alt="" className="footer-social-icon" />
                            </a>
                            <a href="/" aria-label="LinkedIn" className="footer-social-link">
                                <img src="/assets/linkedin.svg" alt="" className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <a href="#solutions" onClick={(e) => handleLinkClick(e, '#solutions')}>Strategic Advisory</a>
                        <a href="#solutions" onClick={(e) => handleLinkClick(e, '#solutions')}>Connect & Grow</a>
                        <a href="#solutions" onClick={(e) => handleLinkClick(e, '#solutions')}>Deliver & Execute</a>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#about-us" onClick={(e) => handleLinkClick(e, '#about-us')}>About Us</a>
                        <a href="#engagements" onClick={(e) => handleLinkClick(e, '#engagements')}>Case Studies</a>
                        <a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>How it works</a>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                    </div>
                </Container>

                <Container className="copyright">
                    <p>&copy; {new Date().getFullYear()} Perselence. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
