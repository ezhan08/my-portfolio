import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mohammed Ezhan. Designed & engineered with care.</p>
      <div className="footer__links">
        <a href={`mailto:${personalInfo.email}`}>Email</a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">
          LeetCode
        </a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

