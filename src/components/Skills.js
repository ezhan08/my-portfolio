import React from 'react';
import { Workflow } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Workflow size={16} />
            Skills
          </p>
          <h2 className="section__title">Technical stack across domains</h2>
        </div>
        <p className="section__subtitle">
          I blend core backend and cloud expertise with modern frontend ecosystems and applied machine learning.
        </p>
      </header>
      <div className="skills-grid">
        {skills.map((skillset, index) => (
          <article key={`${skillset.category}-${index}`} className="skill-card card">
            <h3>{skillset.category}</h3>
            <div className="skill-card__chips">
              {skillset.items.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;

