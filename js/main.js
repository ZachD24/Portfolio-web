// js/main.js — Navigation, animations, interactions globales

// ── Intersection Observer (fade-in au scroll) ─────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

function initObserver() {
  document.querySelectorAll('.fade-in, .slide-right').forEach(el => {
    observer.observe(el);
  });
}

// ── Navigation ────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Fond blanc au scroll
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // état initial

  // Hamburger mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu au clic sur un lien
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu au clic en dehors
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Lien actif selon l'URL courante
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
  });
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initObserver();

  // Sur projets.html : initial render via lang courant
  if (document.getElementById('projects-grid') && typeof renderProjects === 'function') {
    const lang = typeof Lang !== 'undefined' ? Lang.getCurrent() : 'fr';
    renderProjects(lang);
  }
});
