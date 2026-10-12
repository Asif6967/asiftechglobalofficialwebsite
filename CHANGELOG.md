# Changelog

All notable changes to the **Asif Tech Global** web platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.5.0] - 2026-10-12

### Added
- **Dedicated Projects Showcase (`projects.html`)**:
  - Live filterable project directory across Enterprise, Knowledge, and Motion systems.
  - Interactive category selector pills.
  - 3 comprehensive architectural case studies detailing the HR Payroll Engine, Finance Ledger, and Digital PDF Vault.
- **Dedicated Consultation & Contact Hub (`contact.html`)**:
  - Validated advisory brief submission form with client feedback alerts.
  - Direct advisory links to official channels (Facebook, Instagram, GitHub, Email).
- **Homepage Sections (`index.html`)**:
  - Added dedicated *About Asif Khan* section with founder portrait, bio, credentials, and track record metrics.
  - Added *Skills & Technologies Matrix* covering Frontend, Backend, Cloud/DevOps, and Media/Motion.
  - Added Projects Showcase Callout in the executive portfolio section.
- **Modular JavaScript Architecture (`/js/`)**:
  - `js/config.js`: Centralized application settings, author metadata, and secure admin key verification.
  - `js/ui-common.js`: Reusable UI utilities (theme switcher, toasts, mobile menus, accordion FAQs, animated stats).
  - `js/data.js`: Central developer profile data, categorized skills, and project archives.
  - `js/dashboard.js`: Modularized payroll calculator and secure HR/Finance document upload handlers.
  - `js/library.js`: Modularized digital library search, category filters, and PDF.js modal viewer.
- **Modular CSS Architecture (`/css/`)**:
  - `css/theme.css`: Design tokens, dark/light mode variables, typography, and color palettes.
  - `css/main.css`: Base layouts, navigation, cards, spotlights, and interactive components.
  - `css/responsive.css`: Mobile breakpoints and viewport optimizations.
- **Documentation**:
  - Comprehensive `README.md` with architectural guides and local development steps.
  - `CONTRIBUTING.md` developer guide.
  - `CHANGELOG.md` tracking version history.

### Changed
- Refactored `app.js` into an ultra-clean modular orchestrator.
- Refactored `style.css` to import modular sheets (`theme.css`, `main.css`, `responsive.css`).
- Unified navigation bars across all pages (`index.html`, `hr.html`, `finance.html`, `library.html`, `projects.html`, `contact.html`).

### Security
- Removed all hardcoded personal passwords from client-side source code.
- Replaced direct password comparisons with parameterized verification function `ATG_CONFIG.security.verifyAdminKey`.

### Removed
- Removed YouTube bot automation backend (`yt_bot/` directory).
- Removed legacy system batch files (`*.bat`).
- Removed bot control interface (`youtube.html`).
- Cleaned up obsolete links to removed automation scripts across all navigation menus and footers.
