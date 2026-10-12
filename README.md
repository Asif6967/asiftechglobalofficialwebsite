# Asif Tech Global | Executive Engineering Portfolio & Enterprise Platform

An enterprise-grade, high-performance web platform and engineering portfolio crafted by **Asif Khan** (Founder & Systems Architect). Built with clean vanilla web architecture, responsive design, and modular code separation.

[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-00E5FF.svg?style=flat-square)](https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modular%20Architecture-1572B6.svg?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![PDF.js](https://img.shields.io/badge/PDF.js-Client--Side%20Engine-FF6B6B.svg?style=flat-square)](https://mozilla.github.io/pdf.js/)
[![License](https://img.shields.io/badge/License-MIT-E6B800.svg?style=flat-square)](LICENSE)

---

## Live Deployment & Channels

Experience the live production application hosted on GitHub Pages:  
**[https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/](https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/)**

Verified Official Channels:
- **GitHub**: [@asifmanagement39-lab](https://github.com/asifmanagement39-lab)
- **LinkedIn**: [Executive Profile](https://linkedin.com)
- **Facebook**: [@RealAsifUniverse](https://www.facebook.com/RealAsifUniverse/)
- **Instagram**: [@asiftechglobalofficial](https://www.instagram.com/asiftechglobalofficial/)
- **YouTube**: [@AsifTechGlobalOfficial](https://www.youtube.com/@AsifTechGlobalOfficial)

---

## Architectural Highlights

1. **Modular Code Architecture**: Zero bloated frameworks or bundler lock-in. Clean, decoupled `/js/` and `/css/` modules with distinct responsibilities.
2. **Developer Profile & Career Milestones**: Dedicated biographical hub (`about.html`) and homepage profile (`#about`) showcasing credentials, education, and 2021–2026+ industry timeline.
3. **Interactive Portfolio Directory**: Live-filtered projects showcase (`projects.html`) featuring full-stack engineering work, technology badges, and comprehensive case studies.
4. **Hardened Credential Security**: Eliminated all hardcoded passwords in client scripts. Integrated parameterized admin keys with unified verification routines (`ATG_CONFIG.security.verifyAdminKey`).
5. **Immersive Ultra-Luxury Aesthetic**: Curated 24K Gold & Obsidian design system with smooth glassmorphism, responsive CSS grid layouts, and zero visual clutter.
6. **Client-Side PDF Rendering**: Integrated Mozilla's PDF.js library to render high-resolution first-page document covers and embedded multi-page document viewers directly in the browser with zero server dependency.

---

## Documentation Suite

The project includes technical documentation covering architecture, local operations, deployment, and contribution workflows:

| Documentation File | Description | Link |
| :--- | :--- | :--- |
| **`FEATURES.md`** | Detailed specifications for all 10 core features & system architectures | [`FEATURES.md`](FEATURES.md) |
| **`SETUP.md`** | Comprehensive local development setup with Python, Node.js & VS Code | [`SETUP.md`](SETUP.md) |
| **`DEPLOYMENT.md`** | Production guide for GitHub Pages, custom domain DNS & SSL/TLS | [`DEPLOYMENT.md`](DEPLOYMENT.md) |
| **`CONTRIBUTING.md`** | Contribution standards, code style, and branch guidelines | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| **`CHANGELOG.md`** | Chronological record of major releases, features & security updates | [`CHANGELOG.md`](CHANGELOG.md) |

---

## Directory Structure

```text
asiftechglobalofficialwebsite/
├── index.html              # Main ecosystem homepage & executive overview
├── about.html              # Detailed developer profile, biography & career milestones
├── projects.html           # Filterable projects showcase & in-depth case studies
├── contact.html            # Dedicated advisory & consultation brief form
├── youtube.html            # Dedicated YouTube Media Lab & 24/7 stream motion studio
├── hr.html                 # HR & Workforce Management suite
├── finance.html            # Corporate Finance & Treasury suite
├── library.html            # Digital Knowledge Library & PDF repository
├── style.css               # Root stylesheet orchestrating modular CSS layers
├── app.js                  # Master application orchestrator
│
├── js/                     # Modular JavaScript Architecture
│   ├── config.js           # Central configuration, metadata & security routines
│   ├── ui-common.js        # Shared UI utilities (theme, toasts, scroll, modals)
│   ├── data.js             # Developer profile, skills matrix, project archive
│   ├── dashboard.js        # HR payroll engine & document upload handlers
│   └── library.js          # Library search, filter pills & PDF.js modal viewer
│
├── css/                    # Modular CSS Design System
│   ├── theme.css           # Design tokens, color palette, typography & variables
│   ├── main.css            # Base styles, navbar, typography & components
│   └── responsive.css      # Fluid responsive breakpoints & mobile adaptations
│
├── assets/                 # Ambient motion backgrounds, portraits & branding media
├── documents/              # Sample PDF documents for library testing
├── pdf.min.js              # Mozilla PDF.js core rendering engine
├── pdf.worker.min.js       # Web Worker for asynchronous PDF decoding
├── FEATURES.md             # In-depth architectural feature specifications
├── SETUP.md                # Local development instructions & verification checklist
├── DEPLOYMENT.md           # GitHub Pages & custom domain deployment guide
├── CONTRIBUTING.md         # Developer guidelines & contribution standards
├── CHANGELOG.md            # Release version history & migration log
└── README.md               # Technical documentation
```

---

## Core Modules & Capabilities

### 1. Developer Profile & Milestones (`about.html` & `#about`)
- Comprehensive executive biography of Founder & Systems Architect Asif Khan.
- Chronological career milestone roadmap (2021 &ndash; 2026+).
- Academic credentials in Business Administration (MBA) and Computer Science.
- Core technical philosophies: zero unnecessary dependencies, deterministic math, and bulletproof security.

### 2. Executive Portfolio Showcase (`projects.html`)
- Interactive category filtering (`Enterprise`, `Knowledge`, `Motion`, `All`).
- Detailed architectural case studies:
  - **Case Study 01**: Automated Payroll & Statutory Compliance Engine
  - **Case Study 02**: Enterprise Double-Entry Ledger & Cash Flow Forecasting
  - **Case Study 03**: Zero-Backend In-Browser PDF Knowledge Vault

### 3. Digital Knowledge Vault (`library.html`)
- Instant real-time text query filtering across book titles, authors, and metadata.
- 8 topic filter pills: *Coding & Tech*, *Corporate Finance*, *Social & Environmental*, *Media & Entertainment*, *Law & Reference*, *World History*, *Science & AI*, and *Executive Wit*.
- In-modal document reader and client-side cover thumbnail generation.

### 4. HR & Workforce Platform (`hr.html`)
- Interactive net take-home salary calculator with automated statutory deductions (EPF, ESI, Professional Tax, TDS).
- Document publication gate with secure client verification.

### 5. Corporate Treasury & Ledger Suite (`finance.html`)
- Working capital visualization and GST invoice generation pipelines.
- Multi-tier document archiving system for financial audits and annual reports.

### 6. Consultation & Advisory Desk (`contact.html` & `index.html#contact`)
- In-page contact section on `index.html` and dedicated brief form on `contact.html`.
- Validated scope brief submission with SLA guarantees.
- Direct links to verified social channels and GitHub repositories.

### 7. YouTube Media Lab & Motion Studio (`youtube.html`)
- Dedicated visual showcase for 24/7 stream broadcast recordings and procedural GPU animations.
- Interactive Full HD Cinema player with technical encoding specs.
- Official Channel spotlight for `@AsifTechGlobalOfficial` with direct subscribe CTA.

---

## Local Development & Setup

For full setup instructions, see [`SETUP.md`](SETUP.md).

```bash
# Clone the repository
git clone https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite.git
cd asiftechglobalofficialwebsite

# Launch a lightweight local HTTP server (Python 3)
python -m http.server 8080

# Or with Node.js
npx serve .
```

Open `http://localhost:8080` in your web browser.

---

## Production Deployment

For full deployment instructions, see [`DEPLOYMENT.md`](DEPLOYMENT.md).

1. Push your changes to the `main` branch of your GitHub repository.
2. In GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch` and select `main` / `/(root)`.
4. Click **Save**. GitHub Pages will deploy your site in ~60 seconds.

---

## Security Policy

- **No Plaintext Passwords**: Personal credentials have been excised from all client scripts.
- **Admin Access**: Administrative document upload panels utilize `ATG_CONFIG.security.verifyAdminKey` which supports environment-configured security keys (e.g. `portfolio-demo`, `demo`, `admin` for demonstration environments).
- **Sanitized Inputs**: All user submissions utilize strict string escaping (`escapeHtml`) to prevent cross-site scripting (XSS).

---

## License & Credits

Developed with precision by **Asif Khan** • [Asif Tech Global Inc.](https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/)  
Released under the [MIT License](LICENSE).
