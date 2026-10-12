# Asif Tech Global | Executive Engineering Portfolio & Enterprise Platform

An enterprise-grade, high-performance web platform and engineering portfolio crafted by **Asif Khan** (Founder & Systems Architect). Built with clean vanilla web architecture, responsive design, and modular code separation.

[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-00E5FF.svg?style=flat-square)](https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modular%20Architecture-1572B6.svg?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![PDF.js](https://img.shields.io/badge/PDF.js-Client--Side%20Engine-FF6B6B.svg?style=flat-square)](https://mozilla.github.io/pdf.js/)
[![License](https://img.shields.io/badge/License-MIT-E6B800.svg?style=flat-square)](LICENSE)

---

## Live Deployment

Experience the live production application hosted on GitHub Pages:
**[https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/](https://asifmanagement39-lab.github.io/asiftechglobalofficialwebsite/)**

Official Channels:
- **Facebook**: [@RealAsifUniverse](https://www.facebook.com/RealAsifUniverse/)
- **Instagram**: [@asiftechglobalofficial](https://www.instagram.com/asiftechglobalofficial/)
- **GitHub**: [@asifmanagement39-lab](https://github.com/asifmanagement39-lab)

---

## Architectural Highlights

1. **Modular Code Architecture**: Zero bloated frameworks or bundler lock-in. Clean, decoupled `/js/` and `/css/` modules with distinct responsibilities.
2. **Hardened Credential Security**: Eliminated all hardcoded passwords in client scripts. Integrated parameterized admin keys with unified verification routines (`ATG_CONFIG.security.verifyAdminKey`).
3. **Immersive Ultra-Luxury Aesthetic**: Curated 24K Gold & Obsidian design system with smooth glassmorphism, responsive CSS grid layouts, and zero visual clutter.
4. **Client-Side PDF Rendering**: Integrated Mozilla's PDF.js library to render high-resolution first-page document covers and embedded multi-page document viewers directly in the browser with zero server dependency.
5. **Interactive Portfolio Directory**: Live-filtered projects showcase (`projects.html`) featuring full-stack engineering work, technology badges, and comprehensive case studies.

---

## Directory Structure

```text
asiftechglobalofficialwebsite/
├── index.html              # Main ecosystem homepage & executive overview
├── projects.html           # Filterable projects showcase & in-depth case studies
├── youtube.html            # Dedicated YouTube Media Lab & 24/7 stream motion studio
├── contact.html            # Direct advisory & consultation brief form
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
├── assets/                 # Ambient motion backgrounds & branding media
├── pdf.min.js              # Mozilla PDF.js core rendering engine
├── pdf.worker.min.js       # Web Worker for asynchronous PDF decoding
├── CONTRIBUTING.md         # Developer guidelines & contribution standards
├── CHANGELOG.md            # Release version history & migration log
└── README.md               # Technical documentation
```

---

## Core Modules & Capabilities

### 1. Executive Portfolio Showcase (`projects.html`)
- Interactive category filtering (`Enterprise`, `Knowledge`, `Motion`, `All`).
- Detailed architectural case studies:
  - **Case Study 01**: Automated Payroll & Statutory Compliance Engine
  - **Case Study 02**: Enterprise Double-Entry Ledger & Cash Flow Forecasting
  - **Case Study 03**: Zero-Backend In-Browser PDF Knowledge Vault

### 2. Digital Knowledge Vault (`library.html`)
- Instant real-time text query filtering across book titles, authors, and metadata.
- 8 topic filter pills: *Coding & Tech*, *Corporate Finance*, *Social & Environmental*, *Media & Entertainment*, *Law & Reference*, *World History*, *Science & AI*, and *Executive Wit*.
- In-modal document reader and client-side cover thumbnail generation.

### 3. HR & Workforce Platform (`hr.html`)
- Interactive net take-home salary calculator with automated statutory deductions (EPF, ESI, Professional Tax, TDS).
- Document publication gate with secure client verification.

### 4. Corporate Treasury & Ledger Suite (`finance.html`)
- Working capital visualization and GST invoice generation pipelines.
- Multi-tier document archiving system for financial audits and annual reports.

### 5. Consultation & Advisory Desk (`contact.html`)
- Validated scope brief submission with SLA guarantees.
- Direct links to verified social channels and GitHub repositories.

### 6. YouTube Media Lab & Motion Studio (`youtube.html`)
- Dedicated visual showcase for 24/7 stream broadcast recordings and procedural GPU animations.
- Interactive Full HD Cinema player with technical encoding specs.
- Official Channel spotlight for `@AsifTechGlobalOfficial` with direct subscribe CTA.

---

## Local Development & Setup

### Prerequisites
Any standard static HTTP server or Python runtime:
- Python 3.8+ (recommended for quick local server)
- Or Node.js (`npx serve`)
- Or VS Code Live Server extension

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asifmanagement39-lab/asiftechglobalofficialwebsite.git
   cd asiftechglobalofficialwebsite
   ```

2. **Launch a lightweight local HTTP server:**
   ```bash
   # Using Python:
   python -m http.server 8080

   # Or using Node:
   npx serve .
   ```

3. **Open in your browser:**
   Navigate to `http://localhost:8080` to view the platform.

---

## GitHub Pages Deployment

The application is structured to run natively on static web hosts:

1. Push your changes to the `main` branch of your GitHub repository.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/(root)`
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
