// js/lang.js — Moteur de traduction FR/EN
// Dépend de : data/translations.js (doit être chargé avant)

const Lang = (() => {
  const STORAGE_KEY = 'portfolio-lang';
  let current = localStorage.getItem(STORAGE_KEY) || 'fr';

  function apply(lang) {
    if (!TRANSLATIONS[lang]) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = TRANSLATIONS[lang][key];
      if (value === undefined) return;

      // Champs de formulaire : mettre à jour le placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    });

    // Met à jour les options du select contact si présent
    document.querySelectorAll('[data-i18n-option]').forEach(el => {
      const key = el.dataset.i18nOption;
      const value = TRANSLATIONS[lang][key];
      if (value !== undefined) el.textContent = value;
    });

    // Recharge les cartes projets si on est sur projets.html
    if (typeof renderProjects === 'function') {
      renderProjects(lang);
    }
  }

  function toggle() {
    apply(current === 'fr' ? 'en' : 'fr');
  }

  function getCurrent() { return current; }

  document.addEventListener('DOMContentLoaded', () => {
    apply(current);
    document.getElementById('lang-toggle')?.addEventListener('click', toggle);
  });

  return { apply, toggle, getCurrent };
})();
