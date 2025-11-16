import React from 'react';
import { Sparkles, Rocket, Download, Mail, Code, Github, Linkedin, Star, MessageCircle } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

const Hero = ({ onSectionClick }) => {
  return (
    <section id="home" className="section hero">
      <div className="hero__grid">
        {/* Left Side - Name, Tagline, Certifications */}
        <div className="hero__left">
          <div className="hero__header">
            <h1 className="hero__name">Mohammed Ezhan</h1>
            <p className="hero__tagline">
              Software Engineer | Ex-JPMC | Full-Stack + ML | Architecting reliable systems at enterprise scale
            </p>
            <p className="hero__subtitle">
              MSCS @ Khoury College of Computer Sciences, Northeastern University
            </p>
            <p className="hero__subtitle">
              Blending engineering depth, architectural thinking, and people-first communication.
            </p>
            <p className="hero__subtitle hero__subtitle--prominent">
              <strong>Open to Summer 2026 SWE / ML Internships</strong>
            </p>
            <p className="hero__subtitle" style={{ marginTop: '0.5rem' }}>
              <strong>10k+ daily users • $10M+ automated flows • 100+ hrs/month saved • $150K/yr infra savings</strong>
            </p>
            <p className="hero__subtitle" style={{ marginTop: '1rem' }}>
              I'm a full-stack and applied ML engineer who operates like a solutions architect—designing scalable systems, 
              driving cross-functional clarity, and delivering products that marry technical excellence with strong 
              communication and decision-making.
            </p>
            <div className="hero__actions">
              <button 
                type="button" 
                className="button button--primary" 
                onClick={() => onSectionClick('projects')}
              >
                <Rocket size={18} />
                Explore Work
              </button>
              <a 
                className="button button--ghost" 
                href="/resume.pdf" 
                download="Mohammed-Ezhan-Resume.pdf"
                target="_blank" 
                rel="noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button 
                type="button" 
                className="button button--ghost" 
                onClick={() => onSectionClick('contact')}
              >
                <MessageCircle size={18} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Certifications Inline */}
          <div className="hero__certifications">
            <h3 className="hero__certifications-title">Certifications</h3>
            <div className="hero__certs-list">
              {certifications.map((cert, index) => (
                <button
                  key={index}
                  type="button"
                  className="hero__cert-button"
                  onClick={() => onSectionClick('certifications')}
                >
                  <Star size={18} />
                  <span>{cert.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hero__links">
            <a href={`mailto:${personalInfo.email}`} className="hero__link">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__link">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__link">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hero__link">
              <Code size={18} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="hero__right">
          <div className="hero__profile-container">
            <div className="hero__profile-image-wrapper">
              <img 
                src="/images/profile-picture.jpeg" 
                alt="Mohammed Ezhan - Full-stack & ML Engineer, MSCS @ Northeastern University" 
                className="hero__profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hero__profile-placeholder" style={{ display: 'none' }}>
                <span>ME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
