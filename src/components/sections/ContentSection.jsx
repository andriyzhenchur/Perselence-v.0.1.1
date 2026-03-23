import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ContentSection = ({ title, description, image, imagePos = 'right', features = [], id }) => {
    return (
        <Section id={id} className={`section content-section ${imagePos === 'left' ? 'image-left' : ''}`}>
            <Container className="content-container">
                <div className="content-text">
                    <h2 className="section-title">{title}</h2>
                    <p className="content-desc">{description}</p>

                    {features.length > 0 && (
                        <ul className="feature-list">
                            {features.map((feature, index) => (
                                <li key={index} className="feature-list-item">
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <Button href="#" variant="link">Learn more &rarr;</Button>
                </div>

                <div className="content-image-wrapper">
                    <img src={image} alt={title} className="content-img" />
                </div>
            </Container>
        </Section>
    );
};

export default ContentSection;
