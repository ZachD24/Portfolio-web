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

// ── Formulaire de contact ─────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: brancher à Formspree → changer action="https://formspree.io/f/VOTRE_ID"
    // et retirer ce handler pour laisser l'envoi natif fonctionner
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });
}

// ── Barre de progression de page ─────────────────────────
function initPageLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  document.body.prepend(loader);
  setTimeout(() => loader.remove(), 700);
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initObserver();
  initContactForm();
  initPageLoader();

  // Sur projets.html : initial render via lang courant
  if (document.getElementById('projects-grid') && typeof renderProjects === 'function') {
    const lang = typeof Lang !== 'undefined' ? Lang.getCurrent() : 'fr';
    renderProjects(lang);
  }
});
