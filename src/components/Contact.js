import React from 'react';
import { Handshake, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Handshake size={16} />
            Contact
          </p>
          <h2 className="section__title">Let's Build Something Impactful Together</h2>
        </div>
        <p className="section__subtitle">
          Open to Summer 2026 opportunities. Passionate about distributed systems, applied ML, fintech, and scalable architecture.
        </p>
      </header>
      <div className="contact-card card">
        <div className="contact-card__cta">
          <h3>Let's Connect</h3>
          <p>
            I'm actively seeking internship opportunities for Summer 2026 and welcome discussions about software engineering, 
            machine learning, product management, solutions architecture, and technical program management roles. 
            Whether you're a recruiter, hiring manager, or fellow engineer, I'd love to hear from you.
          </p>
          <div className="contact-card__actions">
            <a className="button button--primary" href={`mailto:${personalInfo.email}${personalInfo.emailSecondary ? `,${personalInfo.emailSecondary}` : ''}`}>
              <Mail size={18} />
              Email Me
            </a>
            <a className="button button--ghost" href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
              <Phone size={18} />
              Call Me
            </a>
          </div>
        </div>
        <div className="contact-card__details">
          <div>
            <h4>Email</h4>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            {personalInfo.emailSecondary && (
              <a href={`mailto:${personalInfo.emailSecondary}`} style={{ display: 'block', marginTop: '0.5rem' }}>
                {personalInfo.emailSecondary}
              </a>
            )}
          </div>
          <div>
            <h4>Phone</h4>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
          </div>
          <div>
            <h4>Networks</h4>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

