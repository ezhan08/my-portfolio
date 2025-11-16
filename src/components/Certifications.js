import React from 'react';
import { Award, Star, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Award size={16} />
            Certifications
          </p>
          <h2 className="section__title">Credentials that validate my commitment to excellence</h2>
        </div>
        <p className="section__subtitle">
          Industry-recognized certifications across cloud architecture and cloud-native application delivery.
        </p>
      </header>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <article key={`${certification.title}-${index}`} className="cert-card card">
            {certification.image && (
              <div className="cert-card__image-wrapper">
                <img 
                  src={certification.image} 
                  alt={`${certification.title} - ${certification.issuer} Certification Badge`}
                  className="cert-card__image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <header>
              <h3>{certification.title}</h3>
              <span>{certification.issued}</span>
            </header>
            <p className="cert-card__issuer">{certification.issuer}</p>
          </article>
        ))}
      </div>
      <div className="certifications-footer">
        <p className="certifications-verified">Verified via Credly</p>
        <a 
          href="https://www.credly.com/users/mohammed-ezhan" 
          target="_blank" 
          rel="noreferrer"
          className="certifications-credly-link"
        >
          <Award size={18} />
          <span>View All Certifications on Credly</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default Certifications;

