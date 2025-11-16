import React, { useEffect, useState } from 'react';
import { Trophy, Loader2, UsersRound, Cloud, Rocket } from 'lucide-react';
import { stats } from '../data/portfolioData';

const AnimatedNumber = ({ value, duration = 1400, prefix = '', suffix = '', shouldAnimate = true }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(0);
      return;
    }

    let frame;
    const startTimestamp = performance.now();
    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, shouldAnimate]);

  const formatNumber = (num) => {
    const rounded = num >= 100 ? Math.round(num) : Math.round(num * 10) / 10;
    return rounded.toLocaleString();
  };

  return (
    <span>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

const Stats = ({ isVisible }) => {
  const iconMap = {
    Loader2: Loader2,
    UsersRound: UsersRound,
    Cloud: Cloud,
    Rocket: Rocket
  };

  return (
    <section id="achievements" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Trophy size={16} />
            Impact
          </p>
          <h2 className="section__title">Quantifying the momentum I bring</h2>
        </div>
        <p className="section__subtitle">
          Numbers tell the story of lasting value—across automation, adoption, and research recognition.
        </p>
      </header>
      <div className="stats">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon] || Trophy;
          return (
            <article key={`${stat.label}-${index}`} className="stat-card card">
              <div className="stat-card__icon">
                <Icon size={20} />
              </div>
              <p className="stat-card__value">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  shouldAnimate={isVisible}
                />
              </p>
              <p className="stat-card__label">{stat.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;

