import React from 'react';
import { Code, Brain, Cloud, Monitor, Database } from 'lucide-react';
import { skills } from '../data/portfolioData';

const TechStack = () => {
  const iconMap = {
    'Programming Languages': Code,
    'Frameworks & Libraries': Monitor,
    'ML/AI & Data': Brain,
    'Cloud & Infrastructure': Cloud
  };

  const stacks = skills.map(skill => ({
    icon: iconMap[skill.category] || Code,
    label: skill.category,
    items: skill.items
  }));

  return (
    <section id="tech-stack" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Code size={16} />
            Tech Stack
          </p>
          <h2 className="section__title">Technologies I work with</h2>
        </div>
        <p className="section__subtitle">
          A quick-scannable overview of my technical expertise across full-stack development, ML/AI, and cloud infrastructure.
        </p>
      </header>
      <div className="tech-stack-row">
        {stacks.map((stack, index) => {
          const Icon = stack.icon;
          return (
            <div key={index} className="tech-stack-card card">
              <div className="tech-stack-card__header">
                <Icon size={20} />
                <h3>{stack.label}</h3>
              </div>
              <div className="tech-stack-card__items">
                {stack.items.map((item, idx) => (
                  <span key={idx} className="tech-stack-item">{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

