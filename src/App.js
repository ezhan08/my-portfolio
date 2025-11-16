import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Education from './components/Education';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import WhyHireMe from './components/WhyHireMe';
import TargetRoles from './components/TargetRoles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navigationItems } from './data/portfolioData';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const ids = navigationItems.map((item) => item.id);
    // Also observe the achievements section for stats animation
    ids.push('achievements');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target;
            setActiveSection(id);
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const progress = doc.scrollHeight > doc.clientHeight
        ? (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
        : 0;
      setScrollProgress(progress);
      setShowBackToTop(doc.scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-page">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navigation
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={toggleTheme}
        onSectionClick={scrollToSection}
      />
      <main>
        <Hero onSectionClick={scrollToSection} />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <TechStack />
        <Projects />
        <WhyHireMe />
        <TargetRoles />
        <Contact />
        <Stats isVisible={visibleSections.has('achievements')} />
      </main>
      <Footer />
      {showBackToTop && (
        <button 
          type="button" 
          className="back-to-top" 
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
};

export default App;
