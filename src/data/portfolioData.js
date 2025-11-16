// Portfolio data based on resume
export const personalInfo = {
  name: 'Mohammed Ezhan',
  title: 'MSCS @ NEU | Ex-JPMC',
  email: 'ezhan.m@northeastern.edu',
  emailSecondary: 'ezhanmohammed@gmail.com',
  phone: '+1 (857) 565 5591',
  location: 'Boston, Massachusetts, United States',
  linkedin: 'https://www.linkedin.com/in/mohammed-ezhan/',
  github: 'https://github.com/ezhan08',
  leetcode: 'https://leetcode.com/u/ezhan08/',
  portfolio: '#',
  headline: 'Software Engineer | Ex-JPMC | Full-Stack + ML | Building systems at 10k+ user scale'
};

export const experiences = [
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer 1',
    location: 'Bangalore, India',
    period: 'Aug 2023 – Aug 2025',
    image: '/images/pp2.png',
    summary: 'Architected & delivered fintech components supporting 10k+ users and multi-million-dollar workflows.',
    results: [
      '**Reduced 100+ hrs/month** in manual operations by building a payments tracking dashboard (React, Spring Boot, AWS) used by 5,000+ internal users.',
      '**Improved enterprise auth reliability by 40%** through OAuth2 + AWS IAM redesign across 12 internal services powering 10,000 employees.',
      '**Built ML-driven reconciliation system** (LangChain, Python, AWS) automating 80% of invoice-to-advice matching for **$10M+ daily transactions**.',
      'Partnered with product, ops, and data teams to turn ambiguous requests into stable, scalable engineering solutions.'
    ],
    tags: ['React', 'Spring Boot', 'AWS', 'OAuth2', 'ML', 'LangChain']
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineering Intern',
    location: 'Bangalore, India',
    period: 'Jan 2023 – Jul 2023',
    results: [
      '**Saved $150K+/yr in infra costs** via Kubernetes + Docker + AWS workload redesign; reduced startup time from **3 min → 45 sec**.',
      'Modernized legacy OCR platform (Java 8 → 17, Spring Boot 3), achieving **30% faster processing** and **25% lower memory usage** for **1M+ documents/day**.',
      'Strengthened DevOps pipelines and production readiness through proactive profiling and resiliency improvements.'
    ],
    tags: ['Kubernetes', 'Docker', 'AWS', 'Java 17', 'Spring Boot', 'OCR']
  },
  {
    company: 'Lykiq Labs Private Limited',
    role: 'Mobile App Developer Intern',
    location: 'Mysore, India',
    period: 'Aug 2021 – Oct 2021',
    results: [
      'Delivered a production mobile app (Flutter, Firebase) with **1,000+ daily users** and improved booking efficiency from **5 min → 30 sec**.',
      'Led UI/UX simplification that boosted retention by **35%**.'
    ],
    tags: ['Flutter', 'Firebase', 'Mobile Engineering']
  }
];

export const projects = [
  {
    title: 'SJCE-GPA Mobile App',
    period: 'Apr 2021 - Jun 2021',
    description: 'Built a student-focused mobile app with seamless grade tracking & analytics — improving GPA calculation accuracy by **95%**.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'mobile',
    highlight: '8K+ downloads • 4.9★ rating • 99% crash-free sessions',
    highlightEmphasized: true,
    image: '/images/gpa.png',
    image2: '/images/fb.png',
    imagePosition: 'right',
    liveUrl: 'https://sjce-gpa.en.uptodown.com/android',
    repoUrl: null,
    isInternal: false
  },
  {
    title: "Alzheimer's Detection Using Deep Learning",
    period: 'Nov 2022 - Mar 2023',
    description: 'Designed an end-to-end ML + web pipeline (TensorFlow + Flask + React) reducing diagnostic analysis time from **2 hrs → 5 min**.',
    details: '97.7% validation accuracy • 10,000+ MRI images',
    tech: ['TensorFlow', 'ResNet50', 'Flask', 'React'],
    category: 'ai-ml',
    highlight: '97.7% validation accuracy • 10,000+ MRI images',
    liveUrl: null,
    repoUrl: null,
    isInternal: true
  },
  {
    title: 'IEEE SJCE Student Chapter Website',
    period: '2021 - 2022',
    description: 'Led web revamp that significantly increased event registrations through improved UX and real-time updates.',
    details: 'Bangalore Subsection Award Winner',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
    highlight: 'Bangalore Subsection Award Winner',
    liveUrl: 'https://www.ieeesjce.org/',
    repoUrl: null,
    isInternal: false
  },
  {
    title: 'Musical Instrument Classification (Published Research)',
    period: 'Nov 2024',
    description: 'Explored CNN-based audio classification with Mel-spectrograms and advanced augmentation.',
    details: 'IEEE ICIICS 2024 • 85% accuracy • Interpretability via CAMs',
    tech: ['Deep Learning', 'Audio ML', 'TensorFlow'],
    category: 'ai-ml',
    highlight: 'IEEE ICIICS 2024 • 85% accuracy • Interpretability via CAMs',
    liveUrl: 'https://ieeexplore.ieee.org/document/10859695',
    repoUrl: null,
    paperUrl: 'https://ieeexplore.ieee.org/document/10859695',
    isInternal: false
  }
];

export const education = [
  {
    school: 'Khoury College of CS - Northeastern University',
    degree: 'M.S. Computer Science',
    timeline: 'May 2027',
    location: 'Boston, MA',
    gpa: null,
    image: '/images/neu.JPG',
    flag: '🇺🇸',
    summary: null,
    details: [
      'Program Design Paradigm',
      'Algorithms and Data Structures'
    ]
  },
  {
    school: 'JSS Science & Technology University',
    degree: 'B.E. Computer Science & Engineering',
    timeline: 'Jul 2023',
    location: 'India',
    gpa: '3.72/4.0',
    image: '/images/jc.jpg',
    certificate: '/degreejc.pdf',
    flag: '🇮🇳',
    summary: null,
    details: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Management',
      'Software Engineering'
    ]
  }
];

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect-Associate',
    issuer: 'AWS',
    credentialId: '8783225f3d284967b5856ce298e68da6',
    issued: 'July 2025',
    image: '/images/cc2.png'
  },
  {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    credentialId: 'LF-g2huhxkl71',
    issued: 'Mar 2025',
    image: '/images/cc1.png'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    credentialId: '749HHSE14BVEQOSK',
    issued: 'Mar 2023',
    image: '/images/cc3.png'
  }
];

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React.js', 'Flutter', 'Node.js', 'Flask', 'Express.js']
  },
  {
    category: 'ML/AI & Data',
    items: ['TensorFlow', 'PyTorch', 'LangChain', 'scikit-learn', 'pandas', 'NumPy']
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'MySQL', 'MongoDB', 'Redis', 'Kafka']
  }
];

export const stats = [
  {
    label: 'Operational hours saved monthly',
    value: 100,
    suffix: '+',
    icon: 'Loader2'
  },
  {
    label: 'Daily active users across platforms',
    value: 14000,
    suffix: '+',
    icon: 'UsersRound'
  },
  {
    label: 'Annual infrastructure cost savings',
    prefix: '$',
    value: 150,
    suffix: 'K+',
    icon: 'Cloud'
  },
  {
    label: 'Production applications deployed',
    value: 8,
    suffix: '+',
    icon: 'Rocket'
  }
];

export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'target-roles', label: 'Target Roles' },
  { id: 'contact', label: 'Contact' }
];

