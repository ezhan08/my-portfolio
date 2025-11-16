import React from 'react';
import { Target, TrendingUp, Zap, BookOpen } from 'lucide-react';

const WhyHireMe = () => {
  const points = [
    {
      icon: TrendingUp,
      title: 'Saved $150K/year via Kubernetes + AWS cost optimizations',
      description: ''
    },
    {
      icon: Zap,
      title: 'Shipped production-grade apps used by 10k+ daily users',
      description: ''
    },
    {
      icon: Target,
      title: 'Automated workflows saving 100+ hrs/month',
      description: ''
    },
    {
      icon: BookOpen,
      title: 'Published ML research across IEEE conferences',
      description: ''
    }
  ];

  return (
    <section id="why-hire-me" className="section">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Target size={16} />
            Why Hire Me
          </p>
          <h2 className="section__title">The Rare Combo: Engineering + Architecture + People Skills</h2>
        </div>
        <p className="section__subtitle">
          I'm the engineer who can <strong>build</strong>, <strong>explain</strong>, <strong>align</strong>, and <strong>scale</strong>.
        </p>
      </header>
      <div className="why-hire-me-grid">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <article key={index} className="why-hire-me-card card">
              <div className="why-hire-me-card__icon">
                <Icon size={24} />
              </div>
              <h3>{point.title}</h3>
              {point.description && <p>{point.description}</p>}
            </article>
          );
        })}
      </div>
      <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>I deliver impact:</strong> 10k+ users, $10M+ automated flows, $150K/yr saved. 
          <strong style={{ color: 'var(--text-primary)' }}> I think like an architect:</strong> scalable decisions, clean abstractions, long-term design. 
          <strong style={{ color: 'var(--text-primary)' }}> I communicate clearly:</strong> bridging engineering, product, and stakeholders. 
          <strong style={{ color: 'var(--text-primary)' }}> I collaborate naturally:</strong> teams move faster and with more clarity when I'm involved. 
          <strong style={{ color: 'var(--text-primary)' }}> I execute reliably:</strong> from ML pipelines to cloud-native platforms.
        </p>
      </div>
    </section>
  );
};

export default WhyHireMe;

