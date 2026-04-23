// js/hero-canvas.js — Maillage paramétrique animé (hero)
// Grille de points déformés par fonctions sinusoïdales, style surface Grasshopper

(function () {
  function init() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // Respect de l'accessibilité — pas d'animation si l'utilisateur le préfère
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let W, H, pts, raf;
    let COLS, ROWS;
    const AMP   = 30;    // amplitude de déformation en px
    const SPEED = 0.00042;

    function resize() {
      const hero = canvas.parentElement;
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;

      // Densité adaptée à la taille d'écran
      COLS = W < 640 ? 14 : W < 1024 ? 20 : 28;
      ROWS = W < 640 ?  9 : W < 1024 ? 13 : 18;

      buildGrid();
    }

    function buildGrid() {
      pts = [];
      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          pts.push({
            bx:    (c / COLS) * W,
            by:    (r / ROWS) * H,
            // Phase unique par point — crée la propagation en vague
            phase: c * 0.52 + r * 0.78,
          });
        }
      }
    }

    // Déplacement de chaque point à l'instant t
    function deform(p, t) {
      return {
        x: p.bx + Math.sin(p.phase + t * 1.3)         * AMP,
        y: p.by + Math.cos(p.phase * 0.7 + t * 0.9)   * AMP * 0.55,
      };
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      const stride = COLS + 1;

      // ── Lignes de la grille ──────────────────────────────
      ctx.lineWidth   = 0.6;
      ctx.strokeStyle = 'rgba(255,255,255,0.13)';

      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const i  = r * stride + c;
          const pt = deform(pts[i], t);

          // Ligne horizontale
          if (c < COLS) {
            const right = deform(pts[i + 1], t);
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }
          // Ligne verticale
          if (r < ROWS) {
            const below = deform(pts[i + stride], t);
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(below.x, below.y);
            ctx.stroke();
          }
          // Diagonale (bas-droite) — donne l'aspect triangulation
          if (c < COLS && r < ROWS) {
            const diag = deform(pts[i + stride + 1], t);
            ctx.globalAlpha = 0.45;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(diag.x, diag.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // ── Nœuds — points dorés (accent paramétrique) ──────
      ctx.fillStyle = 'rgba(201,169,110,0.65)';
      for (let i = 0; i < pts.length; i++) {
        const p = deform(pts[i], t);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(ts => draw(ts * SPEED));
    }

    window.addEventListener('resize', () => {
      cancelAnimationFrame(raf);
      resize();
      raf = requestAnimationFrame(ts => draw(ts * SPEED));
    }, { passive: true });

    resize();
    raf = requestAnimationFrame(ts => draw(ts * SPEED));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
