import React from 'react';
import { ArrowRight } from 'lucide-react';
import DNAHeroBackground from './DNAHeroBackground';
import Button from '../ui/Button';
import Section from '../ui/Section';
import Container from '../ui/Container';

import { smoothScrollTo } from '../../utils/scrollUtils';

const Hero = () => {
    const handleScroll = (e, targetId) => {
        smoothScrollTo(e, targetId);
    };

    return (
        <Section className="hero dna-hero">
            {/* DNA Wobble Background */}
            <DNAHeroBackground />

            {/* Content Layer */}
            <div className="hero-content">
                <Container className="hero-container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                    <div style={{
                        maxWidth: '800px',
                        textAlign: 'center'
                    }}>
                        <h1 className="hero-title">
                            Transform Your Business <br />
                            <span className="text-gradient">Build Smarter.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Validate ideas. Connect with trusted partners. Deliver with clarity, compliance, and confidence.
                        </p>
                        <div className="hero-actions" style={{ justifyContent: 'center' }}>
                            <Button href="#contact" variant="primary" onClick={(e) => handleScroll(e, '#contact')}>
                                Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Button>
                            <Button href="#solutions" variant="outline" onClick={(e) => handleScroll(e, '#solutions')}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default Hero;
