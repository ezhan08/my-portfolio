import React from 'react';
import { Briefcase } from 'lucide-react';

const TargetRoles = () => {
  const roles = [
    'Software Engineering Intern',
    'Machine Learning / Applied ML Intern',
    'Full-Stack Engineering Intern',
    'Cloud / Platform Engineering Intern',
    'Solutions Architect Intern',
    'Technical Program Manager (TPM) Intern',
    'Product Management Intern',
    'UI/UX Designer Intern'
  ];

  return (
    <section id="target-roles" className="section section--surface">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Briefcase size={16} />
            Target Roles
          </p>
          <h2 className="section__title">What Roles I'm Targeting (Summer 2026)</h2>
        </div>
        <p className="section__subtitle">
          Where I thrive — seeking opportunities that leverage my blend of technical depth, architectural thinking, and people skills.
        </p>
      </header>
      <div className="target-roles-grid">
        {roles.map((role, index) => (
          <div key={index} className="target-role-card card">
            <Briefcase size={20} />
            <span>{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetRoles;

