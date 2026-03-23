import React from 'react';
import { LineChart, Users, Layers, Check } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const services = [
    {
        icon: <LineChart size={32} className="text-primary" />,
        title: "Strategic Advisory",
        subtitle: "Validate the plan before you commit budget and momentum.",
        points: [
            "Product and problem validation (users, clinical workflows, real constraints)",
            "Architecture and feasibility (build-or-buy, integrations, data flows)",
            "Compliance-aware roadmap (HIPAA, GDPR, security fundamentals, clinical risk flags)",
            "Scope and risk clarity (assumptions, dependencies, unknowns)"
        ],
        footer: {
            label: "Typical outputs",
            content: "MVP definition, phased roadmap, risk register, estimate range, vendor brief when needed."
        }
    },
    {
        icon: <Users size={32} className="text-primary" />,
        title: "Connect & Grow",
        subtitle: "Curated matchmaking, plus the execution support to make it real.",
        points: [
            "Strategic introductions across founders, operators, and delivery partners",
            "Presales and vendor mediation (requirements, fit, pricing logic, expectations)",
            "Partner and client matchmaking (aligned incentives, compliance reality check)",
            "Ecosystem-led growth (warm intros into qualified conversations)"
        ],
        footer: {
            label: "Rules of engagement",
            content: "No mass lists. No random intros. Every match comes with context and a clear next step."
        }
    },
    {
        icon: <Layers size={32} className="text-primary" />,
        title: "Deliver & Execute",
        subtitle: "When it's time to build, we protect timeline, scope, and quality.",
        points: [
            "Proof of concept and prototyping",
            "Vendor orchestration (selection support, accountability, steady cadence)",
            "Delivery and PM oversight (decisions, dependencies, change control)",
            "Quality and compliance alignment (security, vendor risk, release discipline)",
            "Launch readiness (QA, handoff, support plan)"
        ],
        footer: {
            label: "Typical outputs",
            content: "Delivery plan, weekly governance cadence, risk and change control, release readiness checklist, vendor performance reporting."
        }
    }
];

const Services = () => {
    return (
        <Section id="solutions" className="section services">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">Services that create value</h2>
                    <p className="section-subtitle">Not just advice. Connected execution that delivers results.</p>
                </div>

                <div className="grid-3">
                    {services.map((service, index) => (
                        <Card key={index} className="service-card">
                            <div className="service-card-header">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-subtitle">{service.subtitle}</p>
                            </div>

                            <ul className="service-points">
                                {service.points.map((point, i) => (
                                    <li key={i} className="service-point">
                                        <Check size={16} className="check-icon" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="service-card-footer">
                                <span className="footer-label">{service.footer.label}:</span>
                                <p className="footer-content">{service.footer.content}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;
