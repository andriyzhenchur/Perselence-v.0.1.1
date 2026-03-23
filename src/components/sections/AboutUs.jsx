import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const AboutUs = () => {
    return (
        <Section id="about-us" className="section about-us">
            <Container className="about-us-container">
                {/* Row 1: Text (Left) and Image (Right) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gap: '4rem',
                    alignItems: 'start',
                    marginBottom: '4rem'
                }} className="about-header-row">

                    {/* Left Column: Text */}
                    <div className="about-text-column">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Us</h2>
                        <div className="about-description">
                            <p style={{
                                marginBottom: '1.5rem',
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                color: 'var(--color-text-main)',
                                lineHeight: '1.4'
                            }}>
                                Perselence exists to make hard healthtech builds less chaotic and more honest.
                                We sit between founders, operators, and vendors, translating between their worlds so projects stay grounded in reality, not just pitch decks and promises.
                            </p>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-sub)', lineHeight: '1.6' }}>
                                That means asking uncomfortable questions early, pressure-testing ideas with the people who’ll actually have to live with them, and only connecting you to partners we’d trust with our own roadmap.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="about-image-column">
                        <img
                            src="/assets/about-us-visual.svg"
                            alt="Structure meeting organic life"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', // Light shadow
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>

                {/* Row 2: Cards Grid */}
                <div className="about-grid" style={{ marginBottom: '3rem' }}>
                    <Card className="about-card">
                        <strong>Operator + Builder Perspective</strong>
                        <p>We’ve seen projects from every side: founder, product, delivery, and vendor. That’s why our advice is practical, not theoretical, and why we care so much about execution details.</p>
                    </Card>
                    <Card className="about-card">
                        <strong>Healthtech, Not “Any SaaS”</strong>
                        <p>Healthcare delivery, regulations, integrations, clinicians, patients — the context matters. We focus on work where clinical reality and compliance are part of the design, not an afterthought.</p>
                    </Card>
                    <Card className="about-card">
                        <strong>Calm, Transparent Delivery</strong>
                        <p>No panic emails, no mystery delays. You get clear expectations, regular updates, and a shared view of what’s on track, what’s at risk, and what decisions need your attention.</p>
                    </Card>
                    <Card className="about-card">
                        <strong>Long-Term Partners</strong>
                        <p>Our best work happens when we stay close over multiple bets: helping you test ideas, pick partners, and learn from each launch instead of starting from scratch every time.</p>
                    </Card>
                </div>

                {/* Row 3: Tags */}
                <div className="about-tags" style={{ justifyContent: 'center' }}>
                    <span className="tag">Digital health</span>
                    <span className="tag">Remote monitoring</span>
                    <span className="tag">Clinical workflows</span>
                    <span className="tag">Compliance</span>
                    <span className="tag">Delivery oversight</span>
                </div>
            </Container>
        </Section>
    );
};

export default AboutUs;
