import React from 'react';
import { Star } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const reviews = [
    {
        quote: "They helped us avoid costly mistakes we didn't even know were possible. The roadmap was realistic, the risks were flagged early, and we had confidence before we signed a single vendor contract.",
        author: "Sarah Chen",
        role: "Founder, Digital Health Startup",
        image: "/assets/sarah-chen.svg"
    },
    {
        quote: "Not just intros - real connections with context. They understood our compliance needs and only connected us with partners who'd actually worked in healthcare delivery.",
        author: "Michael Rodriguez",
        role: "CTO, Health Systems Platform",
        image: "/assets/michael-rodriguez.svg"
    },
    {
        quote: "Having someone who understands healthcare delivery oversight made all the difference. Our vendor knew they were accountable, scope stayed tight, and we launched on time.",
        author: "Dr. Emily Park",
        role: "Chief Medical Officer",
        image: "/assets/emily-park.svg"
    }
];

const Testimonials = () => {
    return (
        <Section id="testimonials" className="section">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">Loved by teams everywhere.</h2>
                    <p className="section-subtitle">Real results from real partnerships</p>
                </div>

                <div className="grid-3">
                    {reviews.map((review, index) => (
                        <Card key={index} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#1F9D55" stroke="#1F9D55" />
                                ))}
                            </div>
                            <p className="review-quote">"{review.quote}"</p>
                            <div className="review-author">
                                {review.image ? (
                                    <img src={review.image} alt={review.author} className="avatar-img" />
                                ) : (
                                    <div className="avatar-placeholder"></div>
                                )}
                                <div>
                                    <div className="author-name">{review.author}</div>
                                    <div className="author-role">{review.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Testimonials;
