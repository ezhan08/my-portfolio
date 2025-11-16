import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <BriefcaseBusiness size={16} />
            Experience
          </p>
          <h2 className="section__title">Impact That Scales Across Tech & People</h2>
        </div>
        <p className="section__subtitle">
          Each engagement blends engineering rigour with stakeholder empathy. Here's how I move initiatives from idea
          to production.
        </p>
      </header>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <article key={`${experience.company}-${experience.role}-${index}`} className="timeline__item">
            <div className="timeline__marker" />
            <div className="timeline__content card">
              {experience.image && (
                <div className="timeline__image-wrapper">
                  <img 
                    src={experience.image} 
                    alt={`Mohammed Ezhan at ${experience.company} - ${experience.role}`}
                    className="timeline__image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="timeline__meta">
                <h3>{experience.role}</h3>
                <span>{experience.period}</span>
              </div>
              <p className="timeline__company">{experience.company}</p>
              <p className="timeline__location">{experience.location}</p>
              {experience.summary && (
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                  {experience.summary}
                </p>
              )}
              <ul>
                {experience.results.map((result, idx) => {
                  // Parse markdown-style bold text (**text**)
                  const parts = result.split(/(\*\*.*?\*\*)/g);
                  return (
                    <li key={idx}>
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                    </li>
                  );
                })}
              </ul>
              <div className="timeline__tags">
                {experience.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

