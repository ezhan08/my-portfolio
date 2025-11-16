import React from 'react';
import { Github, Linkedin, Sun, Moon, FileText } from 'lucide-react';
import { personalInfo, navigationItems } from '../data/portfolioData';

const Navigation = ({ activeSection, theme, onThemeToggle, onSectionClick }) => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div 
          className="nav__identity" 
          onClick={() => onSectionClick('home')} 
          role="button" 
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSectionClick('home')}
        >
          <div className="nav__mark">
            <span className="nav__initials">ME</span>
          </div>
          <div className="nav__meta">
            <span className="nav__name">{personalInfo.name}</span>
            <span className="nav__title">{personalInfo.title}</span>
          </div>
        </div>
        <nav className="nav__links">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
              onClick={() => onSectionClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav__actions">
          <a 
            className="nav__resume-button" 
            href="/resume.pdf" 
            download="Mohammed-Ezhan-Resume.pdf"
            target="_blank" 
            rel="noreferrer"
          >
            <FileText size={16} />
            Resume
          </a>
          <button 
            type="button" 
            className="icon-button" 
            onClick={onThemeToggle} 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a 
            className="icon-button" 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            className="icon-button"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

