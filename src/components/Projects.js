import React, { useState, useMemo } from 'react';
import { Layers3, Globe, Github, Code, FileText, Play } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Layers3 size={16} />
            Projects
          </p>
          <h2 className="section__title">Engineering + Product Thinking + Real Users</h2>
        </div>
        <p className="section__subtitle">
          From enterprise dashboards to research accelerators, these engagements showcase the breadth of my technical
          and product leadership.
        </p>
      </header>
      <div className="filters">
        {projectFilters.map((filterOption) => (
          <button
            key={filterOption.id}
            type="button"
            className={`chip ${filter === filterOption.id ? 'chip--active' : ''}`}
            onClick={() => setFilter(filterOption.id)}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
      <div className="projects">
        {filteredProjects.map((project, index) => (
          <article 
            key={`${project.title}-${index}`} 
            className={`project-card card ${project.imagePosition === 'right' ? 'project-card--image-right' : ''}`}
          >
            {project.image && project.imagePosition !== 'right' && (
              <div className="project-card__image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-card__image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <div className="project-card__content">
              <header>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h3>{project.title}</h3>
                  {project.isInternal && (
                    <span className="chip chip--small" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                      Internal Project – Demo on Request
                    </span>
                  )}
                </div>
                {project.period && <span className="project-card__period">{project.period}</span>}
                <p className={project.highlightEmphasized ? 'project-card__highlight--emphasized' : ''}>
                  {project.highlightEmphasized && project.highlight.includes('Google Play Store') ? (
                    <>
                      <span className="project-card__highlight-icon">
                        <Play size={18} />
                      </span>
                      <strong>{project.highlight}</strong>
                    </>
                  ) : (
                    project.highlight
                  )}
                </p>
              </header>
              <p className="project-card__description">
                {project.description.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                  }
                  return <span key={partIdx}>{part}</span>;
                })}
              </p>
              {project.details && (
                <p className="project-card__details">{project.details}</p>
              )}
              <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Skills demonstrated:</strong>
              </div>
              <div className="project-card__tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              {project.image2 && (
                <div className="project-card__image-wrapper project-card__image-wrapper--below-content">
                  <img 
                    src={project.image2} 
                    alt={`${project.title} - Additional view`}
                    className="project-card__image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <footer className="project-card__links">
                {project.paperUrl ? (
                  <a href={project.paperUrl} target="_blank" rel="noreferrer">
                    <FileText size={16} />
                    View Paper
                  </a>
                ) : project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Globe size={16} />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-card__links--muted">
                    <Globe size={16} />
                    Live demo on request
                  </span>
                )}
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                ) : (
                  <span className="project-card__links--muted">
                    <Code size={16} />
                    Internal project
                  </span>
                )}
              </footer>
            </div>
            {project.image && project.imagePosition === 'right' && (
              <div className="project-card__image-wrapper project-card__image-wrapper--right">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-card__image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

