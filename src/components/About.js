import React from 'react';
import { Handshake, Brain, MessageSquare, Settings, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <header className="section__header">
        <div>
          <p className="section__eyebrow">
            <Handshake size={16} />
            About
          </p>
          <h2 className="section__title">Full-Stack Engineer & Applied ML Practitioner with a Solutions Architect Mindset</h2>
        </div>
        <p className="section__subtitle">
          I build systems that teams can trust—clean, scalable engineering guided by clear communication and a deep understanding of user and business needs.
        </p>
      </header>
      <div className="about__grid">
        <div className="about__story card">
          <h3>What drives me</h3>
          <p>
            At JPMorgan Chase, I wasn't just delivering features. I was <strong>translating ambiguous workflows into resilient architectures</strong>, 
            partnering with product managers, data scientists, and operations leaders to ship high-impact solutions used across enterprise environments.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>🔹 My superpower is the blend of:</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>• <strong>technical depth</strong> (full-stack, ML, distributed systems)</li>
              <li style={{ marginBottom: '0.75rem' }}>• <strong>architectural judgment</strong> (tradeoffs, scalability, long-term design)</li>
              <li style={{ marginBottom: '0.75rem' }}>• <strong>people skills</strong> (communication, stakeholder alignment, leadership)</li>
            </ul>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            My work has impacted <strong>8,000+ students</strong>, <strong>10,000+ enterprise users</strong>, and automated <strong>$10M+ daily flows</strong>.
          </p>
        </div>
        <div className="about__highlights">
          <article className="highlight-card">
            <Brain size={20} />
            <div>
              <h4>🧠 Systems Thinker</h4>
              <p>Architecture = people + process + technology. I design solutions that scale reliably <em>and</em> reduce operational surprise.</p>
            </div>
          </article>
          <article className="highlight-card">
            <MessageSquare size={20} />
            <div>
              <h4>💬 Clear Communicator</h4>
              <p>I explain complex systems in simple language so decisions stay aligned across engineering, product, and leadership.</p>
            </div>
          </article>
          <article className="highlight-card">
            <Settings size={20} />
            <div>
              <h4>⚙️ Reliable Builder</h4>
              <p>From ML pipelines to cloud-native services, I deliver 0→1 products and scale them to thousands of users.</p>
            </div>
          </article>
          <article className="highlight-card">
            <Users size={20} />
            <div>
              <h4>🤝 Trusted Partner</h4>
              <p>Known for strong ownership, calm decision-making, proactive alignment, and making teams move faster.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;

