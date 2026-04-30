// data/translations.js
// SOURCE UNIQUE des traductions FR/EN
// "lang.toggle" affiche toujours la langue CIBLE (vers laquelle on bascule)

const TRANSLATIONS = {
  fr: {
    // Navigation
    "nav.home":          "Accueil",
    "nav.projects":      "Projets",
    "nav.about":         "À propos",
    "nav.contact":       "Contact",
    "nav.cv":            "CV",
    "lang.toggle":       "EN",

    // index.html — Hero
    "hero.tagline":      "Étudiant à la maîtrise d'architecture · Université Laval",
    "hero.cta":          "Voir les projets",
    "hero.scroll":       "Défiler",

    // projets.html
    "projects.title":    "Projets",
    "projects.subtitle": "Une sélection de travaux universitaires et personnels",

    // a-propos.html
    "about.title":       "À propos",
    "about.bio.1":       "Étudiant en architecture à l'Université Laval, je réalise présentement un échange académique à l'École Nationale Supérieure d'Architecture de Lyon (ENSAL). Mon parcours atypique — techniques d'architecture, génie électrique, design de produits — nourrit une approche transversale du projet, à la jonction de la technique et de la création.",
    "about.bio.2":       "Une expérience de stage chez Yvan Deschênes Architecte m'a permis de développer des compétences concrètes en modélisation et dessin technique. Je m'intéresse particulièrement à l'architecture paramétrique et aux outils computationnels comme Rhino et Grasshopper.",
    "about.skills.title": "Compétences",
    "about.software":    "Logiciels",
    "about.languages":   "Langues",
    "about.lang.fr":     "Français — natif",
    "about.lang.en":     "Anglais — parlé et écrit",
    "about.photo.alt":   "Portrait d'Emma Renaud",

    // contact.html
    "contact.title":     "Contact",
    "contact.subtitle":  "Pour toute demande de collaboration ou question",
    "contact.email":     "E-mail",
    "contact.address":   "Adresse",

    // cv.html
    "cv.title":              "Curriculum Vitae",
    "cv.header.sub":         "Étudiant en Architecture, Université Laval",
    "cv.education":          "Formation",
    "cv.experience":         "Expériences",
    "cv.skills":             "Compétences",
    "cv.download":           "Télécharger le CV (PDF)",
    "cv.present":            "présent",

    // cv — Formation
    "cv.edu.exchange.period": "Automne 2025 — Hiver 2026",
    "cv.edu.exchange.title":  "Échange étudiant",
    "cv.edu.bachelor.title":  "Baccalauréat en Architecture",
    "cv.edu.product.title":   "Design de produits",
    "cv.edu.product.desc":    "Non complété.",
    "cv.edu.electrical.period": "Automne 2021",
    "cv.edu.electrical.title":  "Génie Électrique",
    "cv.edu.electrical.desc":   "Non complété.",
    "cv.edu.sciences.title":  "DEC Sciences de la nature",
    "cv.edu.arch.title":      "Techniques d'architecture",

    // cv — Expériences
    "cv.exp.intern.period":   "Étés 2024 et 2025",
    "cv.exp.intern.title":    "Stagiaire en architecture",
    "cv.exp.intern.desc":     "Production de dessins techniques et de modélisations 3D. Utilisation d'AutoCAD, SketchUp, Illustrator et D5 Render.",
    "cv.exp.other.period":    "Divers",
    "cv.exp.other.title":     "Autres expériences",
    "cv.exp.other.desc":      "Serveur, agent administratif, animateur, arbitre de hockey, manœuvre en usine.",

    // cv — Langues (sidebar)
    "cv.lang.fr.level":       "Natif",
    "cv.lang.en.level":       "Parlé et écrit",

    // Footer
    "footer.rights":     "Tous droits réservés",
  },

  en: {
    // Navigation
    "nav.home":          "Home",
    "nav.projects":      "Projects",
    "nav.about":         "About",
    "nav.contact":       "Contact",
    "nav.cv":            "CV",
    "lang.toggle":       "FR",

    // index.html — Hero
    "hero.tagline":      "Master of Architecture Student · Université Laval",
    "hero.cta":          "View projects",
    "hero.scroll":       "Scroll",

    // projets.html
    "projects.title":    "Projects",
    "projects.subtitle": "A selection of academic and personal work",

    // a-propos.html
    "about.title":       "About",
    "about.bio.1":       "Architecture student at Université Laval, currently on academic exchange at the École Nationale Supérieure d'Architecture de Lyon (ENSAL). My unconventional path — architectural technology, electrical engineering, product design — informs a cross-disciplinary approach to design, at the intersection of technical rigour and creative thinking.",
    "about.bio.2":       "An internship at Yvan Deschênes Architecte gave me hands-on experience in 3D modelling and technical drawing. I have a particular interest in parametric architecture and computational tools such as Rhino and Grasshopper.",
    "about.skills.title": "Skills",
    "about.software":    "Software",
    "about.languages":   "Languages",
    "about.lang.fr":     "French — native",
    "about.lang.en":     "English — spoken and written",
    "about.photo.alt":   "Portrait of Emma Renaud",

    // contact.html
    "contact.title":     "Contact",
    "contact.subtitle":  "For any collaboration request or question",
    "contact.email":     "Email",
    "contact.address":   "Address",

    // cv.html
    "cv.title":              "Curriculum Vitae",
    "cv.header.sub":         "Architecture Student, Université Laval",
    "cv.education":          "Education",
    "cv.experience":         "Experience",
    "cv.skills":             "Skills",
    "cv.download":           "Download CV (PDF)",
    "cv.present":            "present",

    // cv — Education
    "cv.edu.exchange.period": "Fall 2025 — Winter 2026",
    "cv.edu.exchange.title":  "Student Exchange",
    "cv.edu.bachelor.title":  "Bachelor in Architecture",
    "cv.edu.product.title":   "Product Design",
    "cv.edu.product.desc":    "Not completed.",
    "cv.edu.electrical.period": "Fall 2021",
    "cv.edu.electrical.title":  "Electrical Engineering",
    "cv.edu.electrical.desc":   "Not completed.",
    "cv.edu.sciences.title":  "College Diploma – Natural Sciences",
    "cv.edu.arch.title":      "Architectural Technology",

    // cv — Experience
    "cv.exp.intern.period":   "Summers 2024 and 2025",
    "cv.exp.intern.title":    "Architecture Intern",
    "cv.exp.intern.desc":     "Production of technical drawings and 3D models. Use of AutoCAD, SketchUp, Illustrator and D5 Render.",
    "cv.exp.other.period":    "Various",
    "cv.exp.other.title":     "Other Experiences",
    "cv.exp.other.desc":      "Server, administrative agent, animator, hockey referee, factory worker.",

    // cv — Languages (sidebar)
    "cv.lang.fr.level":       "Native",
    "cv.lang.en.level":       "Spoken and written",

    // Footer
    "footer.rights":     "All rights reserved",
  }
};
