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

    const DRAW_DURATION = 1100;  // ms pour tracer les deux lignes simultanément
    const DASHLEN       = 9000;  // valeur supérieure à toute longueur de path de texte

    // Prépare chaque ligne : stroke visible, fill transparent
    lines.forEach(el => {
      el.style.fill             = 'transparent';
      el.style.stroke           = 'rgba(255,255,255,0.92)';
      el.style.strokeWidth      = '0.8';
      el.style.strokeLinecap    = 'round';
      el.style.strokeLinejoin   = 'round';
      el.style.strokeDasharray  = DASHLEN;
      el.style.strokeDashoffset = DASHLEN;
      el.style.opacity          = '1';
    });

    // Les deux lignes partent en même temps
    setTimeout(() => {
      lines.forEach(el => {
        el.style.transition       = `stroke-dashoffset ${DRAW_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        el.style.strokeDashoffset = '0';
      });

      // Remplit pendant que le tracé se termine (overlap à 65%)
      setTimeout(() => {
        lines.forEach(el => {
          el.style.transition = 'fill 600ms ease, stroke 600ms ease';
          el.style.fill       = 'rgba(255,255,255,0.95)';
          el.style.stroke     = 'rgba(255,255,255,0.1)';
        });
      }, Math.round(DRAW_DURATION * 0.65));
    }, 500);

    // Révèle tagline et CTA après la fin du tracé
    showHeroExtras(500 + DRAW_DURATION + 400);
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
