import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Award, Briefcase, GraduationCap, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: '#f3f4f6',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(4px)',
      zIndex: 50,
      borderBottom: '1px solid #374151'
    },
    navContent: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '24px'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#f3f4f6',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'color 0.3s'
    },
    hero: {
      paddingTop: '96px',
      paddingBottom: '48px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    section: {
      padding: '48px 16px',
      maxWidth: '1152px',
      margin: '0 auto'
    },
    sectionDark: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    card: {
      backgroundColor: '#1f2937',
      padding: '24px',
      borderRadius: '8px',
      transition: 'background-color 0.3s'
    },
    cardHover: {
      backgroundColor: '#374151'
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '16px',
      transition: 'background-color 0.3s'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '24px'
    },
    socialLink: {
      padding: '8px',
      color: '#f3f4f6',
      transition: 'color 0.3s'
    },
    pill: {
      display: 'inline-block',
      padding: '4px 12px',
      backgroundColor: '#374151',
      borderRadius: '9999px',
      fontSize: '12px',
      margin: '4px'
    },
    statusBadge: {
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '12px'
    },
    presented: {
      backgroundColor: '#14532d',
      color: '#86efac'
    },
    underReview: {
      backgroundColor: '#713f12',
      color: '#fde047'
    }
  };

  const projects = [
    {
      title: "SJCE-GPA Calculator",
      description: "Flutter app with 6,000+ downloads and 4.9★ rating. Helps engineering students track academic progress with Firebase integration.",
      tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
      stats: "6K+ downloads | 4.9★ rating",
      link: "#"
    },
    {
      title: "Alzheimer's Disease Detection",
      description: "ML-powered web app achieving 97.7% accuracy in early disease detection using CNN on MRI scans.",
      tech: ["React.js", "Flask", "TensorFlow", "Python"],
      stats: "97.7% accuracy",
      link: "#"
    },
    {
      title: "Payments Tracking Dashboard",
      description: "Enterprise dashboard at JPMorgan saving 100+ operational hours weekly in middle office operations.",
      tech: ["React.js", "Spring Boot", "MySQL", "Kubernetes"],
      stats: "100+ hours saved weekly",
      link: "#"
    },
    {
      title: "IEEE-SJCE Website",
      description: "Dynamic website that drove 35% increase in club membership through improved engagement.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      stats: "35% membership increase",
      link: "#"
    }
  ];

  const publications = [
    {
      title: "Urban Sound Classification with Convolutional Neural Network",
      venue: "IEEE ICIICS 2024",
      status: "Presented",
      authors: "Mohammed Ezhan, et al."
    },
    {
      title: "Multiscale Object Detection in Remote Sensory Images Using Vision Transformer",
      venue: "Q1 Journal",
      status: "Under Review",
      authors: "Mohammed Ezhan, et al."
    },
    {
      title: "Optimized Wireless Multipath Routing Protocol with Load-Aware Congestion Control",
      venue: "Q1 Journal",
      status: "Under Review",
      authors: "Mohammed Ezhan, et al."
    }
  ];

  const experience = [
    {
      role: "Software Engineer 1",
      company: "JPMorgan Chase & Co.",
      period: "Aug 2023 - Present",
      highlights: [
        "Leading ML model development for invoice matching",
        "Developed IAM application with Spring Boot",
        "Mentoring junior developers"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      period: "Jan 2023 - Jul 2023",
      highlights: [
        "Upgraded OCR app to Java 17",
        "Achieved 25-30% cost reduction with Kubernetes"
      ]
    },
    {
      role: "Flutter Developer Intern",
      company: "Lykiq Labs",
      period: "Aug 2021 - Oct 2021",
      highlights: [
        "Designed UI for Park-On app",
        "Enhanced user booking experience"
      ]
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "C++", "JavaScript", "Dart"],
    "Frontend": ["React.js", "Flutter", "HTML/CSS", "Bootstrap", "Tailwind"],
    "Backend": ["Spring Boot", "Flask", "Node.js", "PHP"],
    "Tools": ["Docker", "Kubernetes", "Jenkins", "Git", "AWS", "MySQL"]
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>Mohammed Ezhan</h1>
          <div style={styles.navLinks}>
            {['About', 'Projects', 'Experience', 'Publications', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                style={styles.navButton}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#f3f4f6'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 16px' }}>
          <h2 style={styles.heroTitle}>Mohammed Ezhan</h2>
          <p style={{ fontSize: '20px', color: '#9ca3af', marginBottom: '24px' }}>
            Software Engineer at JPMorgan Chase | Full Stack Developer | ML Enthusiast
          </p>
          <div style={styles.socialLinks}>
            <a href="mailto:ezhanmohammed@gmail.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-ezhan-157a83148/" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Github size={24} />
            </a>
          </div>
          <button style={styles.button}>
            <Download style={{ marginRight: '8px' }} size={20} />
            Download Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <h3 style={styles.sectionTitle}>
          <GraduationCap style={{ marginRight: '12px', color: '#60a5fa' }} />
          About Me
        </h3>
        <div style={styles.grid}>
          <div>
            <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
              I'm a Software Engineer at JPMorgan Chase with a passion for building scalable applications and solving complex problems. 
              With a strong foundation in full-stack development and emerging expertise in machine learning, I love creating solutions 
              that make a real impact.
            </p>
            <p style={{ color: '#d1d5db' }}>
              Currently working on enterprise-level applications in fintech, while pursuing research in AI/ML applications. 
              I've published research papers and developed apps used by thousands of users.
            </p>
          </div>
          <div style={{ ...styles.card, backgroundColor: '#111827' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '16px', color: '#60a5fa' }}>Quick Facts</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#d1d5db' }}>
                <Award style={{ marginRight: '8px', color: '#fbbf24' }} size={16} /> GPA: 9.31/10.00
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#d1d5db' }}>
                <Code style={{ marginRight: '8px', color: '#34d399' }} size={16} /> 6K+ app downloads
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#d1d5db' }}>
                <FileText style={{ marginRight: '8px', color: '#a78bfa' }} size={16} /> 3 research papers
              </li>
              <li style={{ display: 'flex', alignItems: 'center', color: '#d1d5db' }}>
                <Briefcase style={{ marginRight: '8px', color: '#60a5fa' }} size={16} /> AWS Certified
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <Code style={{ marginRight: '12px', color: '#60a5fa' }} />
          Featured Projects
        </h3>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '20px', fontWeight: '600' }}>{project.title}</h4>
                <ExternalLink style={{ color: '#9ca3af' }} size={20} />
              </div>
              <p style={{ color: '#d1d5db', marginBottom: '12px' }}>{project.description}</p>
              <p style={{ fontSize: '14px', color: '#60a5fa', marginBottom: '12px' }}>{project.stats}</p>
              <div>
                {project.tech.map((tech, i) => (
                  <span key={i} style={styles.pill}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <h3 style={styles.sectionTitle}>
          <Briefcase style={{ marginRight: '12px', color: '#60a5fa' }} />
          Professional Experience
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experience.map((exp, index) => (
            <div key={index} style={{ ...styles.card, backgroundColor: '#111827' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '600' }}>{exp.role}</h4>
                  <p style={{ color: '#60a5fa' }}>{exp.company}</p>
                </div>
                <span style={{ color: '#9ca3af', fontSize: '14px' }}>{exp.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.highlights.map((highlight, i) => (
                  <li key={i} style={{ color: '#d1d5db', marginBottom: '4px' }}>
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <FileText style={{ marginRight: '12px', color: '#60a5fa' }} />
          Research Publications
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {publications.map((pub, index) => (
            <div key={index} style={styles.card}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{pub.title}</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>{pub.authors}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#60a5fa' }}>{pub.venue}</span>
                <span style={{
                  ...styles.statusBadge,
                  ...(pub.status === 'Presented' ? styles.presented : styles.underReview)
                }}>
                  {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ ...styles.section, ...styles.sectionDark }}>
        <h3 style={styles.sectionTitle}>
          <Code style={{ marginRight: '12px', color: '#60a5fa' }} />
          Technical Skills
        </h3>
        <div style={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{ ...styles.card, backgroundColor: '#111827' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '16px', color: '#60a5fa' }}>{category}</h4>
              <div>
                {items.map((skill, i) => (
                  <div key={i} style={{ color: '#d1d5db', marginBottom: '8px' }}>{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 16px', borderTop: '1px solid #374151', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af' }}>© 2025 Mohammed Ezhan. Built with React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;