import React from 'react';
import { Mail, Shield, Zap, Send, ArrowRight, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { submitForm } from '../../utils/formSubmit.js';
import { EXTERNAL_LINKS } from '../../constants/index.js';

const Contact = () => {
    const [submitting, setSubmitting] = React.useState(false);
    const [succeeded, setSucceeded] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const formData = new FormData(event.target);

        const success = await submitForm(formData);

        if (success) {
            setSucceeded(true);
            event.target.reset();
        } else {
            console.error("Form submission failed");
        }

        setSubmitting(false);
    };

    return (
        <Section id="contact" className="section contact">
            <Container className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Let's talk.</h2>
                    <p className="contact-description">
                        Whether you're validating an idea, searching for the right partners, or need delivery oversight, we're here to help.
                    </p>

                    <div className="contact-points">
                        <div className="contact-point">
                            <div className="contact-icon-wrapper quick-response">
                                <Zap size={20} />
                            </div>
                            <div className="contact-point-text">
                                <strong>Quick Response</strong>
                                <p>We typically respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact-point">
                            <div className="contact-icon-wrapper confidential">
                                <Shield size={20} />
                            </div>
                            <div className="contact-point-text">
                                <strong>Confidential</strong>
                                <p>Your information is safe and never shared</p>
                            </div>
                        </div>

                        <div className="contact-point">
                            <div className="contact-icon-wrapper no-pressure">
                                <Mail size={20} />
                            </div>
                            <div className="contact-point-text">
                                <strong>No Pressure</strong>
                                <p>Exploratory conversations with zero obligation</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-block">
                        <p className="contact-cta-text">
                            <Calendar size={18} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
                            Skip the form - let's talk live.
                        </p>
                        <Button
                            href={EXTERNAL_LINKS.CALENDAR}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                        >
                            Book a call <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Button>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <Card className="contact-card">
                        <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/mlgnzdgz" method="POST">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" id="name" name="name" placeholder="John Smith" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" name="email" placeholder="john@company.com" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input type="text" id="company" name="company" placeholder="Your Company" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interest">Interested in</label>
                                    <select id="interest" name="service">
                                        <option value="">Select a service</option>
                                        <option value="advisory">Strategic Advisory</option>
                                        <option value="growth">Connect & Grow</option>
                                        <option value="execution">Deliver & Execute</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell us about your healthtech challenge..." required></textarea>
                            </div>

                            {succeeded ? (
                                <div className="alert-success" style={{
                                    padding: '1rem',
                                    backgroundColor: '#d1fae5',
                                    color: '#065f46',
                                    borderRadius: '8px',
                                    marginTop: '1rem',
                                    textAlign: 'center',
                                    fontWeight: '500'
                                }}>
                                    Thank you! We’ll get back to you soon.
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-send"
                                    disabled={submitting}
                                    style={{ opacity: submitting ? 0.7 : 1 }}
                                >
                                    <Send size={18} className="btn-icon" />
                                    {submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            )}

                            {!succeeded && (
                                <p className="form-footer">We typically respond within 24 hours</p>
                            )}
                        </form>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
