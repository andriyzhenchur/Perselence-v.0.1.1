import React from 'react';
import { Target, Shield, Users, Clipboard, AlertCircle, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const features = [
    {
        icon: <Target size={24} />,
        label: "Clarity First",
        description: "We turn messy ideas into a clear, prioritized plan: what to build now, what to park for later, and what to drop – with the reasons written down."
    },
    {
        icon: <Shield size={24} />,
        label: "Compliance-Aware by Default",
        description: "HIPAA/GDPR, data flows, audit trails – we flag risks early and bake the basics into the plan so you’re not retrofitting compliance at the end."
    },
    {
        icon: <Users size={24} />,
        label: "Vetted Partners, Not Vendor Roulette",
        description: "Intros only go to people who’ve actually shipped in healthtech. No mass vendor lists, no “try your luck” emails – just context, fit, and next steps."
    },
    {
        icon: <Clipboard size={24} />,
        label: "Operator-Led Delivery Oversight",
        description: "You get someone who speaks both product and engineering, and has lived the hospital / clinic / vendor reality – not just slideware."
    },
    {
        icon: <AlertCircle size={24} />,
        label: "Scope & Risk Control",
        description: "We don’t wait for surprises. Risks, assumptions, and dependencies stay visible, so you can say “no” or “not now” before it gets expensive."
    },
    {
        icon: <CheckCircle size={24} />,
        label: "Launch Readiness",
        description: "Security, QA, handover, support, go-live checklists – we help you launch in a way your clinicians, patients, and board can stand behind."
    }
];

const Features = () => {
    return (
        <Section id="features" className="section features">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">Everything you need.<br />Nothing you don't.</h2>
                    <p className="section-subtitle">Service differentiators that actually show up in delivery.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <Card key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h4 className="feature-label">{feature.label}</h4>
                            <p className="feature-desc">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Features;
