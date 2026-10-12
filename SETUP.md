# Local Development & Setup Guide | Asif Tech Global

This guide provides instructions for setting up, running, and testing the **Asif Tech Global** executive portfolio and web platform locally on your machine.

---

## 1. System Prerequisites

The platform is engineered using modern standards-compliant HTML5, CSS3, and ES6+ JavaScript. It requires **no compilation, no bundler step, and no heavy runtime dependencies**.

To run the application locally, you only need:
- Any modern web browser: **Google Chrome**, **Mozilla Firefox**, **Apple Safari**, or **Microsoft Edge**.
- A lightweight static HTTP server (choose any one of the options below).

> [!IMPORTANT]
> **Why an HTTP server is recommended over `file:///`:**  
> The Knowledge Library (`library.html`) utilizes Mozilla's **PDF.js** with asynchronous Web Workers (`pdf.worker.min.js`). Web browsers restrict Worker script initialization and CORS requests over the `file://` protocol for security. Running a local HTTP server guarantees that all PDF decoding workers and asset fetch calls operate correctly.

---

## 2. Quickstart Execution Methods

### Option A: Python 3 (Recommended)

Python includes a built-in HTTP server.

```bash
# Navigate to the project root directory
cd asiftechglobalofficialwebsite

# Launch the server on port 8080 (Windows / macOS / Linux)
python -m http.server 8080

# If your system uses 'python3':
python3 -m http.server 8080
```

Once started, open your browser and visit:  
**`http://localhost:8080`**

---

### Option B: Node.js / npx

If you have Node.js installed, you can use `npx` to run a static server without installing any packages globally:

```bash
# Using 'serve'
npx serve . -p 8080

# Or using 'http-server'
npx http-server -p 8080 -c-1
```

Once started, open your browser and visit:  
**`http://localhost:8080`**

---

### Option C: VS Code Live Server Extension

If you use Visual Studio Code:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions marketplace.
3. Right-click on `index.html` in the file explorer.
4. Select **"Open with Live Server"**.
5. The site will automatically launch in your default browser at `http://127.0.0.1:5500/index.html`.

---

### Option D: Direct Browser Execution (Static Inspection)

For quick inspection of layout and style without PDF rendering:
- Double-click `index.html`, `about.html`, `projects.html`, or `contact.html` to open directly in your web browser.

---

## 3. Directory & File Organization

```text
asiftechglobalofficialwebsite/
├── index.html              # Main homepage: Hero, About, Skills, Features, Projects & In-Page Contact
├── about.html              # Detailed developer portfolio info, founder biography & milestone timeline
├── projects.html           # Interactive project showcase with category filters & case studies
├── contact.html            # Dedicated project inquiry & consultation brief form
├── youtube.html            # YouTube Media Lab: 24/7 stream simulations & cinema player
├── hr.html                 # HR & Workforce Management portal with interactive payroll engine
├── finance.html            # Corporate Treasury portal with double-entry ledgers & GST invoices
├── library.html            # Digital Knowledge Library powered by in-browser Mozilla PDF.js
├── style.css               # Root CSS aggregator
│
├── js/                     # Modular JavaScript Architecture
│   ├── config.js           # Configuration, verified channels, metadata & security keys
│   ├── ui-common.js        # Shared utilities: theme toggle, toast alerts, mobile drawer, modals
│   ├── data.js             # Developer profile, skills matrix, project archive & case study data
│   ├── dashboard.js        # Payroll calculation engine, shift math & document upload handlers
│   └── library.js          # Live search filters, topic pills & PDF.js modal viewer
│
├── css/                    # Modular CSS Design System
│   ├── theme.css           # Design tokens: 24K Gold & Obsidian color palette, typography, shadows
│   ├── main.css            # Base styles, navbar, hero, cards, forms, modals & contact grid
│   └── responsive.css      # Fluid responsive breakpoints (Desktop, Tablet, Mobile)
│
├── assets/                 # Video motion clips, branding logos & portrait photography
├── documents/              # Sample PDF documents & publications for library testing
├── pdf.min.js              # Mozilla PDF.js library engine
├── pdf.worker.min.js       # Asynchronous Web Worker for PDF rasterization
├── FEATURES.md             # Comprehensive breakdown of all platform features & architectures
├── DEPLOYMENT.md           # Step-by-step GitHub Pages & custom domain deployment guide
├── CONTRIBUTING.md         # Contribution guidelines & coding conventions
├── CHANGELOG.md            # Release history & version migration log
└── README.md               # Main project introduction & overview
```

---

## 4. Configuration & Customization

All primary configurations and metadata are centralized in [`js/config.js`](file:///c:/Users/ASIF/Desktop/video%20coding/asiftechglobalofficialwebsite/js/config.js):

### 1. Updating Social & Contact Channels
Modify `ATG_CONFIG.social` in `js/config.js` to change contact endpoints across all pages:

```javascript
social: {
  github: 'https://github.com/asifmanagement39-lab',
  linkedin: 'https://linkedin.com',
  facebook: 'https://www.facebook.com/RealAsifUniverse/',
  instagram: 'https://www.instagram.com/asiftechglobalofficial/',
  youtube: 'https://www.youtube.com/@AsifTechGlobalOfficial',
  email: 'asif@asiftechglobal.com'
}
```

### 2. Updating Profile Data & Case Studies
Developer statistics, skills badges, and project entries can be customized in [`js/data.js`](file:///c:/Users/ASIF/Desktop/video%20coding/asiftechglobalofficialwebsite/js/data.js):
- `DEVELOPER_PROFILE`: Personal biography, focus areas, and metrics.
- `SKILLS_DATA`: Technical competencies across Frontend, Backend, Cloud, and Media.
- `PROJECTS_DATA`: Showcase cards with tags, descriptions, live demo links, and GitHub links.
- `CASE_STUDIES`: In-depth architectural breakdowns displayed on `projects.html`.

### 3. Demo Admin Passkey
For demonstration purposes in the HR and Finance document upload gates, the default administrative keys can be set in `js/config.js`:

```javascript
security: {
  adminKey: 'portfolio-demo', // Change or set to an environment parameter
  verifyAdminKey: function(key) {
    const validKeys = [this.adminKey, 'demo', 'admin'];
    return validKeys.includes((key || '').trim());
  }
}
```

---

## 5. Local Verification & Testing Checklist

After starting your local server, verify all features by walking through this checklist:

| Test Item | Verification Steps | Expected Result |
| :--- | :--- | :--- |
| **Homepage Navigation** | Click each navbar link (`Home`, `About`, `Projects`, `Features`, `Contact`) | Smooth scrolling to corresponding section or direct navigation |
| **Theme Toggle** | Click the theme icon button in the header | Seamless transition between Obsidian Dark and Clean Light modes |
| **In-Page Contact Form** | Submit sample inputs in `#contact` on `index.html` | Immediate toast notification confirming dispatch without page reload |
| **Dedicated Contact Form** | Fill out and submit form on `contact.html` | Success toast with inquiry tracking reference |
| **About Page** | Navigate to `about.html` | Displays founder bio, credentials, career milestone timeline & skills |
| **Projects Live Filtering** | On `projects.html`, click filter pills (`Enterprise`, `Knowledge`, `Motion`) | Cards filter instantly without page reload |
| **Knowledge Library** | Visit `library.html`, type in search bar, click on a document | Search filters items instantly; clicking opens PDF in reader modal |
| **HR Payroll Calculator** | On `hr.html`, enter basic salary and select allowances | Take-home salary, EPF, ESI, and TDS calculate automatically |
| **YouTube Media Lab** | On `youtube.html`, click "Play in Cinema Viewer" on any motion card | Full HD cinema modal opens and plays selected video clip |
| **Responsive Layout** | Open Developer Tools (F12) and toggle mobile device mode | Navigation collapses to mobile drawer; grids reflow gracefully |

---

## 6. Troubleshooting

### Problem: PDF Documents Fail to Load in Library
- **Cause**: The page was opened via `file:///` instead of an HTTP server. Browsers block Web Worker execution from local file URIs.
- **Solution**: Run a local HTTP server (`python -m http.server 8080`) and access the page via `http://localhost:8080/library.html`.

### Problem: Port 8080 Is Already in Use
- **Cause**: Another service or process is occupying port 8080.
- **Solution**: Specify an alternative port:
  ```bash
  python -m http.server 8085
  # Or
  npx serve . -p 8085
  ```

### Problem: Styles or Scripts Are Not Updating After Edits
- **Cause**: Browser HTTP caching.
- **Solution**: Perform a hard refresh:
  - **Windows / Linux**: `Ctrl + F5` or `Ctrl + Shift + R`
  - **macOS**: `Cmd + Shift + R`
  - Alternatively, open your browser's DevTools, go to the **Network** tab, and check **"Disable cache"**.

---

## 7. Next Steps

- Consult [`FEATURES.md`](file:///c:/Users/ASIF/Desktop/video%20coding/asiftechglobalofficialwebsite/FEATURES.md) for deep dives into system architecture and module specifications.
- Consult [`DEPLOYMENT.md`](file:///c:/Users/ASIF/Desktop/video%20coding/asiftechglobalofficialwebsite/DEPLOYMENT.md) for step-by-step instructions on deploying the platform to GitHub Pages with custom domains and HTTPS.
