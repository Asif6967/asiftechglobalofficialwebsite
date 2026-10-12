// ==========================================================================
// ASIF TECH GLOBAL — Developer Portfolio Data & Case Studies Store
// Production-ready data models for projects, skills, and case studies.
// ==========================================================================

const DeveloperData = {
  profile: {
    name: "Asif Khan",
    title: "Founder & Full-Stack Systems Architect",
    experienceYears: "5+",
    location: "India (Available for Global Remote & Enterprise Advisory)",
    bio: "Full-stack systems architect and founder of Asif Tech Global with 5+ years of practical experience architecting high-throughput corporate platforms, real-time telemetry dashboards, and cloud-native digital ecosystems. Passionate about clean code, robust performance benchmarks, and user-centric luxury design.",
    email: "contact@asiftechglobal.xyz",
    social: {
      facebook: "https://www.facebook.com/RealAsifUniverse/",
      instagram: "https://www.instagram.com/asiftechglobalofficial/",
      github: "https://github.com/asifmanagement39-lab",
      youtube: "https://www.youtube.com/@AsifTechGlobalOfficial"
    }
  },

  skills: [
    {
      category: "Frontend Engineering",
      items: [
        { name: "HTML5 / Semantic Web", level: "Expert" },
        { name: "Modern CSS3 / Glassmorphism", level: "Expert" },
        { name: "JavaScript (ES6+ Vanilla)", level: "Expert" },
        { name: "Responsive UI / CSS Grid", level: "Expert" },
        { name: "PDF.js Document Engine", level: "Advanced" },
        { name: "DOM Performance Tuning", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Python 3.12 / Flask / FastAPI", level: "Advanced" },
        { name: "Node.js & Express", level: "Advanced" },
        { name: "RESTful API Architecture", level: "Expert" },
        { name: "Server-Sent Events (SSE)", level: "Advanced" },
        { name: "WebSockets & Telemetry", level: "Advanced" },
        { name: "Batch Processing & Workers", level: "Advanced" }
      ]
    },
    {
      category: "Cloud, DevOps & Tooling",
      items: [
        { name: "Docker & Containerization", level: "Advanced" },
        { name: "Linux / Bash Automation", level: "Expert" },
        { name: "Git & GitHub Pages Deployments", level: "Expert" },
        { name: "Nginx Web Reverse Proxy", level: "Advanced" },
        { name: "CI/CD Deployment Pipelines", level: "Intermediate" },
        { name: "Security & OWASP Best Practices", level: "Advanced" }
      ]
    },
    {
      category: "Media, Motion & Computing",
      items: [
        { name: "FFmpeg Media Pipelines", level: "Advanced" },
        { name: "RTMP Streaming Broadcasts", level: "Advanced" },
        { name: "Canvas 2D & Motion Visuals", level: "Advanced" },
        { name: "Performance Profiling", level: "Expert" }
      ]
    }
  ],

  projects: [
    {
      id: "hr-suite",
      title: "HR Workforce & Executive Talent Management Suite",
      badge: "Enterprise Portal",
      category: "enterprise",
      stack: ["Vanilla JS", "CSS Grid", "PDF.js", "LocalStorage Engine"],
      description: "An all-in-one corporate personnel management platform with automated salary computation, attendance logs, and role-gated PDF contract vault.",
      highlights: [
        "Interactive real-time payroll and net salary calculator with tax breakdown",
        "Personnel directory with department filtering and search indexing",
        "Document vault with live search, category pills, and in-page PDF preview",
        "Zero-dependency lightweight client architecture running with instant load"
      ],
      caseStudyLink: "projects.html#case-hr",
      liveUrl: "hr.html",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    },
    {
      id: "finance-portal",
      title: "Corporate Treasury & Ledger Financial Analytics Hub",
      badge: "FinTech Platform",
      category: "enterprise",
      stack: ["ES6 JavaScript", "Financial Models", "SVG Data Charts", "Glassmorphism"],
      description: "Comprehensive financial operational suite featuring corporate treasury reports, GST/tax calculation, dynamic ledger tracking, and budget allocation models.",
      highlights: [
        "Dynamic financial statement and ledger calculation engine",
        "Fiscal audit report generator with exportable records",
        "Treasury document archive with instant search indexing",
        "High-contrast luxury dark theme preventing eye fatigue during analytical reviews"
      ],
      caseStudyLink: "projects.html#case-finance",
      liveUrl: "finance.html",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    },
    {
      id: "digital-library",
      title: "Next-Gen 8-Category Executive Digital Research Library",
      badge: "Knowledge Engine",
      category: "knowledge",
      stack: ["PDF.js v2.16", "Client-Side Search", "Category Indexer", "HTML5"],
      description: "Curated multi-disciplinary research repository featuring sub-millisecond client filtering across 8 domains and seamless embedded PDF document reader.",
      highlights: [
        "Curated knowledge categories spanning Technology, Finance, Science, and Law",
        "Sub-millisecond instant search filter indexing across titles and authors",
        "Embedded PDF.js modal viewer with native zoom, paging, and download",
        "Offline-capable and responsive across mobile, tablet, and ultra-wide screens"
      ],
      caseStudyLink: "projects.html#case-library",
      liveUrl: "library.html",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    },
    {
      id: "cyber-terminal",
      title: "Cyber Coding Terminal & Telemetry Workstation",
      badge: "Systems Architecture",
      category: "motion",
      stack: ["Python", "WebSockets", "Realtime Diagnostics", "Dark UI"],
      description: "Low-latency developer diagnostics workstation and continuous server monitoring console providing instant feedback on server health.",
      highlights: [
        "Sub-10ms telemetry stream visualization",
        "Automated health heartbeat checks with failover alerts",
        "Compact memory footprint optimized for headless servers",
        "High-fidelity motion preview asset integration"
      ],
      caseStudyLink: "projects.html#case-motion",
      liveUrl: "index.html#portfolio",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    },
    {
      id: "quantum-particle",
      title: "Quantum Particle Physics Visual Compute Engine",
      badge: "Visual Intelligence",
      category: "motion",
      stack: ["WebGL", "Physics Compute", "Canvas 2D", "Mathematical Models"],
      description: "High-performance particle engine rendering complex multi-body mathematical physics simulations in real time for executive presentations.",
      highlights: [
        "60fps hardware-accelerated particle physics math",
        "Custom collision kernels and gravitational pull algorithms",
        "Adaptive resolution scaling to conserve mobile battery life"
      ],
      caseStudyLink: "projects.html#case-motion",
      liveUrl: "index.html#portfolio",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    },
    {
      id: "code-rain-engine",
      title: "Infinite Code Rain & High-Throughput Media Engine",
      badge: "Media Pipeline",
      category: "motion",
      stack: ["GPU Compute", "Canvas 2D", "FFmpeg", "Node.js"],
      description: "Procedural visual computing engine powering continuous 24/7 background motion backdrops and streaming pipelines.",
      highlights: [
        "Continuous procedural frame rendering with zero memory leaks",
        "Lossless buffer recycling and hardware acceleration",
        "Integrated into Asif Tech Global's signature visual identity"
      ],
      caseStudyLink: "projects.html#case-motion",
      liveUrl: "index.html#portfolio",
      githubUrl: "https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite"
    }
  ],

  caseStudies: {
    hr: {
      title: "Case Study: Corporate HR & Workforce Portal",
      client: "Internal Enterprise Tooling",
      duration: "3 Weeks",
      problem: "Traditional HR software was cumbersome, slow, and loaded with unnecessary dependencies, making quick workforce updates and contract reviews difficult on mobile devices.",
      solution: "Engineered a zero-dependency, static-first HR suite with an instant payroll computation engine, personnel records, and a secure in-page PDF viewer powered by client-side PDF.js.",
      architecture: [
        "Modular Vanilla JS architecture for instant initial load (<1.2s)",
        "Client-side session validation avoiding server authentication roundtrips",
        "Persistent localStorage document registry with mock sample seed",
        "High-contrast dark mode tailored for HR analytics readability"
      ],
      metrics: [
        { label: "Lighthouse Performance", value: "98/100" },
        { label: "Bundle Size", value: "0 kB external frameworks" },
        { label: "Search Latency", value: "<15ms instant" }
      ]
    },
    finance: {
      title: "Case Study: Corporate Treasury & Financial Analytics Hub",
      client: "Corporate Operations",
      duration: "4 Weeks",
      problem: "Financial officers required a unified, high-security dashboard to preview balance sheets, track recurring expenses, and run tax scenario forecasts without leaving their browser.",
      solution: "Developed an interactive financial operations portal with dynamic ledger calculations, automated GST computation, and categorized archival vaults.",
      architecture: [
        "Reactive calculation engine using pure JavaScript mathematical utilities",
        "Accessible data tables with zebra striping and gold elevation indicators",
        "Client-side document filtering with zero network overhead"
      ],
      metrics: [
        { label: "Calculation Accuracy", value: "100% Deterministic" },
        { label: "Zero-Latency UI", value: "Instant State Updates" },
        { label: "Mobile Usability", value: "Full Viewport Adaptation" }
      ]
    },
    library: {
      title: "Case Study: High-Performance 8-Category Digital Library",
      client: "Research & Professional Development",
      duration: "2 Weeks",
      problem: "Users needed a centralized, lightning-fast digital library to search, filter, and read research whitepapers, code manuals, and corporate reports directly without external readers.",
      solution: "Constructed an 8-category digital library featuring instant multi-field search and an embedded PDF.js reader with full download and viewing controls.",
      architecture: [
        "In-memory tokenized search indexing across title, category, author, and description",
        "Category pill filter with automatic active state management and smooth transitions",
        "Custom PDF modal viewer integrating Mozilla's PDF.js v2.16 with sandbox iframe isolation"
      ],
      metrics: [
        { label: "Indexed Categories", value: "8 Curated Domains" },
        { label: "Filter Response Time", value: "<10ms Sub-frame" },
        { label: "Reader Reliability", value: "100% Standards Compliant" }
      ]
    }
  }
};

if (typeof window !== 'undefined') {
  window.DeveloperData = DeveloperData;
}
