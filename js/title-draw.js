// js/title-draw.js — Animation de tracé paramétrique du titre hero
// Les lettres se dessinent via stroke-dashoffset, style plotter CNC / courbe Grasshopper

(function () {
  function init() {
    const lines  = document.querySelectorAll('.hero-draw-line');
    const extras = document.querySelectorAll('.hero-extra');
    if (!lines.length) return;

    // Masque les extras dès que JS est actif (ils réapparaîtront après le tracé)
    extras.forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(20px)';
    });

    // Pas d'animation si prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lines.forEach(el => {
        el.style.fill   = 'rgba(255,255,255,0.95)';
        el.style.stroke = 'none';
      });
      showHeroExtras(0);
      return;
    }

    const DRAW_DURATION = 1600;  // ms pour tracer chaque ligne
    const LINE_GAP      = 200;   // ms entre fin d'une ligne et début de la suivante
    const DASHLEN       = 9000;  // valeur supérieure à toute longueur de path de texte

    // Prépare chaque ligne : stroke visible, fill transparent
    lines.forEach(el => {
      el.style.fill           = 'transparent';
      el.style.stroke         = 'rgba(255,255,255,0.92)';
      el.style.strokeWidth    = '0.8';
      el.style.strokeLinecap  = 'round';
      el.style.strokeLinejoin = 'round';
      el.style.strokeDasharray  = DASHLEN;
      el.style.strokeDashoffset = DASHLEN;
      el.style.opacity = '1';
    });

    // Trace chaque ligne séquentiellement
    let cursor = 500; // délai initial (ms)

    lines.forEach((el, i) => {
      const startAt = cursor;

      setTimeout(() => {
        // Lance le tracé
        el.style.transition = `stroke-dashoffset ${DRAW_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        el.style.strokeDashoffset = '0';

        // Après le tracé : fade-in du remplissage blanc
        setTimeout(() => {
          el.style.transition = 'fill 500ms ease, stroke 500ms ease';
          el.style.fill       = 'rgba(255,255,255,0.95)';
          el.style.stroke     = 'rgba(255,255,255,0.1)';
        }, DRAW_DURATION);

      }, startAt);

      cursor += DRAW_DURATION + LINE_GAP;
    });

    // Révèle tagline et CTA après que toutes les lignes sont tracées
    const totalDraw = cursor + 500;
    showHeroExtras(totalDraw);
  }

  // Déclenche l'apparition des éléments hero sous le titre
  function showHeroExtras(delay) {
    const extras = document.querySelectorAll('.hero-extra');
    extras.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.transform  = 'translateY(0)';
        el.style.opacity    = '1';
      }, delay + i * 350);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
