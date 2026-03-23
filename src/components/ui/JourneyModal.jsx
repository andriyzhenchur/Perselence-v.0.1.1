import React, { useState, useEffect } from 'react';

export default function JourneyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('message'); // 'message' | 'meeting'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle CSS transition coordinate
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Slight delay to allow display:block before adding opacity transition class
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsSuccess(false);
        document.body.style.overflow = 'unset';
      }, 300); // match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mlgnzdgz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`modal-backdrop ${isAnimating ? 'open' : ''}`} onClick={onClose}>
      <div 
        className={`modal-panel ${isAnimating ? 'open' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Let's connect</h2>
          <div className="modal-tabs">
            <button 
              className={`modal-tab ${activeTab === 'message' ? 'active' : ''}`}
              onClick={() => setActiveTab('message')}
            >
              Send a Message
            </button>
            <button 
              className={`modal-tab ${activeTab === 'meeting' ? 'active' : ''}`}
              onClick={() => setActiveTab('meeting')}
            >
              Book a Meeting
            </button>
          </div>
        </div>

        <div className="modal-content">
          {activeTab === 'message' && (
            <div className="modal-tab-content fade-in">
              {isSuccess ? (
                <div className="success-state">
                  <div className="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3>Message Sent</h3>
                  <p>Thanks for reaching out. We'll get back to you shortly.</p>
                  <button className="btn btn-outline" onClick={onClose} style={{ marginTop: '1.5rem' }}>
                    Close window
                  </button>
                </div>
              ) : (
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Brief message</label>
                    <textarea id="message" name="message" required rows="4" placeholder="How can we help?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === 'meeting' && (
            <div className="modal-tab-content fade-in gcal-container">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ35qJ-brrJEXnIxX57yWALXeRcaoqDewgBIKULjTMh2ZCb0ydPZcQGHJj0Ly92znDbzJB-ml5ZT?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Book a Meeting"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
