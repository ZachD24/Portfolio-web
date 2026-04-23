// js/projects.js — Génération dynamique des cartes projets
// Dépend de : data/projects.js, js/lang.js (doivent être chargés avant)

function renderProjects(lang) {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  lang = lang || (typeof Lang !== 'undefined' ? Lang.getCurrent() : 'fr');

  grid.innerHTML = PROJECTS.map((p, i) => {
    const title = lang === 'fr' ? p.titleFR : p.titleEN;
    const type  = lang === 'fr' ? p.typeFR  : p.typeEN;

    return `
      <article class="project-card fade-in" data-delay="${i + 1}">
        <div class="project-card__img-wrapper">
          <img
            src="${p.image}"
            alt="${title}"
            loading="lazy"
            class="project-img"
            width="800"
            height="600"
          >
          <div class="project-overlay">
            <span class="project-overlay__type">${type}</span>
          </div>
        </div>
        <div class="project-card__info">
          <h3 class="project-card__title">${title}</h3>
          <p class="project-card__meta">${p.year} · ${p.location}</p>
        </div>
      </article>`;
  }).join('');

  // Réactive l'Intersection Observer sur les nouvelles cartes
  if (typeof observer !== 'undefined') {
    grid.querySelectorAll('.fade-in').forEach(el => {
      el.classList.remove('visible');
      observer.observe(el);
    });
  }
}
