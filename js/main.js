// ==========================================================================
// ASIF TECH GLOBAL — Main Application Orchestrator (main.js)
// Global initialization, event listeners, animated counters, and UX handlers
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher
  if (window.ATGTheme && typeof window.ATGTheme.init === 'function') {
    window.ATGTheme.init();
  }

  // 2. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinksContainer = document.querySelector('.nav-links');
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when clicking any link
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // 4. Animated Statistics Counters
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10) || 0;
          const suffix = el.getAttribute('data-counter-suffix') || '';
          if (window.ATGUtils && typeof window.ATGUtils.animateCounter === 'function') {
            window.ATGUtils.animateCounter(el, target, suffix);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // 5. FAQ Accordion Handling
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isCurrentActive = item.classList.contains('active');
        // Close siblings
        document.querySelectorAll('.faq-item').forEach(sibling => {
          sibling.classList.remove('active');
        });
        if (!isCurrentActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 6. Global Modal Close via ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active, .modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });

  // 7. Executive Console Branding
  console.log(
    '%c ASIF TECH GLOBAL %c Systems Architecture & Engineering Portfolio ',
    'background: #e6b800; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #0f1424; color: #f0f0f0; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );

  // 8. Developer Tabbed View Switcher ("Jis par click kare wahi khule, baki lambi karke nahi lagaye")
  window.switchPortfolioView = function(viewId, scrollToTabs = false) {
    if (!viewId) return;
    const cleanId = viewId.replace('#', '');
    
    const panels = document.querySelectorAll('.dev-view-panel');
    const tabs = document.querySelectorAll('.dev-tab-btn');
    if (panels.length === 0) return;

    let matchedPanel = document.getElementById('view-' + cleanId) || document.getElementById(cleanId);
    if (!matchedPanel) {
      // Map aliases
      if (cleanId === 'about' || cleanId === 'vision') matchedPanel = document.getElementById('view-about');
      else if (cleanId === 'skills') matchedPanel = document.getElementById('view-about');
      else if (cleanId === 'projects' || cleanId === 'portfolio') matchedPanel = document.getElementById('view-projects');
      else if (cleanId === 'portals' || cleanId === 'mba') matchedPanel = document.getElementById('view-portals');
      else if (cleanId === 'pricing' || cleanId === 'services') matchedPanel = document.getElementById('view-pricing');
      else if (cleanId === 'experience' || cleanId === 'timeline') matchedPanel = document.getElementById('view-experience');
      else if (cleanId === 'contact') matchedPanel = document.getElementById('view-contact');
      else matchedPanel = panels[0];
    }
    
    if (matchedPanel) {
      panels.forEach(p => p.classList.remove('active'));
      matchedPanel.classList.add('active');
      
      const panelKey = matchedPanel.id.replace('view-', '');
      tabs.forEach(tab => {
        const tabTarget = tab.getAttribute('data-view');
        if (tabTarget === panelKey) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      
      // Update browser history hash
      try {
        history.replaceState(null, null, '#' + panelKey);
      } catch (err) {}
      
      if (scrollToTabs) {
        const tabNavbar = document.querySelector('.dev-tab-navbar');
        if (tabNavbar) {
          tabNavbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Check initial hash on load
  const initialHash = window.location.hash ? window.location.hash.substring(1) : 'projects';
  if (document.querySelectorAll('.dev-view-panel').length > 0) {
    window.switchPortfolioView(initialHash, false);
  }

  // Handle dev tab button clicks
  document.querySelectorAll('.dev-tab-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetView = this.getAttribute('data-view');
      window.switchPortfolioView(targetView, true);
    });
  });

  // Handle navbar clicks to smoothly activate views
  document.querySelectorAll('.nav-menu a, .navbar a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#home' && href !== '#') {
      link.addEventListener('click', function(e) {
        const targetKey = href.substring(1);
        const panel = document.getElementById('view-' + targetKey) || document.getElementById(targetKey);
        if (panel || ['projects', 'portals', 'experience', 'pricing', 'about', 'contact'].includes(targetKey)) {
          e.preventDefault();
          window.switchPortfolioView(targetKey, true);
        }
      });
    }
  });
});
