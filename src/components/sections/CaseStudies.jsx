import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const CaseStudyLayout = ({ label, title, context, whatWeDid, results, image }) => {
    return (
        <div style={{ marginBottom: '6rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '3rem', textAlign: 'center' }}>{title}</h3>

            <div className="content-container">
                <div className="content-text">
                    <div className="content-desc">
                        <div style={{ marginBottom: '2rem' }}>
                            <span style={{
                                display: 'inline-block',
                                color: 'var(--color-primary)',
                                fontWeight: '700',
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                marginBottom: '1rem',
                            }}>
                                {label}
                            </span>
                            <p>{context}</p>
                        </div>

                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>What we did:</strong>
                            <ul className="feature-list">
                                {whatWeDid.map((item, index) => (
                                    <li key={index} className="feature-list-item" style={{ alignItems: 'flex-start' }}>
                                        <CheckCircle size={20} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, width: '100%' }}>
                    <div className="content-image-wrapper" style={{ marginBottom: '2rem' }}>
                        <img src={image} alt={title} className="content-img" />
                    </div>

                    <div className="content-desc">
                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Results:</strong>
                        <ul className="feature-list" style={{ marginBottom: 0 }}>
                            {results.map((item, index) => (
                                <li key={index} className="feature-list-item" style={{ alignItems: 'flex-start' }}>
                                    <CheckCircle size={20} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CaseStudies = () => {
    return (
        <Section id="engagements" className="section services">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">How the work actually looked in real life</h2>
                    <p className="section-subtitle">Two examples from recent engagements.</p>
                </div>

                <CaseStudyLayout
                    label="FOUNDER / DISCOVERY + POC"
                    title="From fuzzy idea to fundable roadmap in 6 weeks"
                    context="A founder building a new digital health platform had a strong vision, but no clear scope, architecture, or sense of what “MVP” really meant."
                    whatWeDid={[
                        "Ran a short discovery + advisory engagement to map workflows, stakeholders, and constraints.",
                        "Pressure-tested the idea against market reality, compliance basics, and data flows.",
                        "Built a lean POC and a simple clickable flow they could show to clinicians and investors.",
                        "Delivered a phased roadmap, risk register, and vendor brief they could use with any dev team."
                    ]}
                    results={[
                        "Clear MVP scope (what’s in, what’s out, and why).",
                        "A POC they used in investor and partner meetings.",
                        "Fewer “unknown unknowns” when negotiating with vendors."
                    ]}
                    image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                />

                <CaseStudyLayout
                    label="HEALTH SYSTEM / DELIVERY OVERSIGHT"
                    title="Launching a new service line without derailing existing delivery"
                    context="A health systems platform team needed to launch a new module while still keeping their existing roadmap on track. Multiple vendors, strict compliance, and internal politics were in play."
                    whatWeDid={[
                        "Helped them choose and align vendors instead of running a generic RFP beauty contest.",
                        "Set up lightweight governance: weekly check-ins, shared dashboard, risk log.",
                        "Provided operator-level oversight on scope, dependencies, and clinical risk.",
                        "Coordinated launch readiness: QA, security sign-off, and support handover."
                    ]}
                    results={[
                        "New module launched on the promised date, without blowing up the rest of the roadmap.",
                        "Fewer escalations and surprises for leadership.",
                        "A reusable playbook for the next vendor-driven project."
                    ]}
                    image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                />
            </Container>
        </Section>
    );
};

export default CaseStudies;
