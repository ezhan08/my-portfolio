import React from 'react';
import { GraduationCap, FileText, ExternalLink } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <GraduationCap size={16} />
            Education
          </p>
          <h2 className="section__title">Strong Foundations + Applied Industry Depth</h2>
        </div>
        <p className="section__subtitle">
          Formal foundations in computer science, amplified by research and industry exposure across continents.
        </p>
      </header>
      <div className="education-grid">
        {education.map((entry, index) => (
          <article key={`${entry.school}-${index}`} className="education-card card">
            {entry.image && (
              <div className="education-card__image-wrapper">
                <img 
                  src={entry.image} 
                  alt={`${entry.school} - ${entry.degree}`}
                  className="education-card__image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <header>
              <h3>
                {entry.flag && <span style={{ marginRight: '0.5rem' }}>{entry.flag}</span>}
                {entry.school}
              </h3>
              <span>{entry.timeline}</span>
            </header>
            <p className="education-card__degree">{entry.degree}</p>
            <p className="education-card__location">{entry.location}</p>
            {entry.summary && (
              <p style={{ fontStyle: 'italic', marginBottom: entry.gpa ? '0.5rem' : '1rem', color: 'var(--text-secondary)' }}>
                {entry.summary}
              </p>
            )}
            {entry.gpa && (
              <p className="education-card__gpa" style={{ marginBottom: entry.certificate ? '1rem' : '1rem' }}>GPA: {entry.gpa}</p>
            )}
            {entry.certificate && (
              <div style={{ marginBottom: '1rem' }}>
                <a 
                  href={entry.certificate} 
                  target="_blank" 
                  rel="noreferrer"
                  className="education-card__cert-button"
                >
                  <FileText size={18} />
                  View Degree Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
            <ul>
              {entry.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;

