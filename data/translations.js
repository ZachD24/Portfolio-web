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
    "about.bio.1":       "Étudiant en architecture à l'Université Laval, je réalise présentement un échange académique à l'École Nationale Supérieure d'Architecture de Lyon (ENSAL). J'ai toujours été partagé entre les technologies et le design, ce qui a rendu mon parcours académique atypique. J'ai étudié dans le très technique et le très créatif avant de trouver l'architecture, qui est pour moi le juste milieu parfait. Je crois que mes intérêts variés sont l'une de mes plus grandes forces, car ils me permettent de combiner mon amour des technologies et du design. Je m'intéresse particulièrement aux outils paramétriques comme Grasshopper ainsi qu'aux technologies émergentes comme l'intelligence artificielle. J'ai aussi un intérêt marqué pour l'architecture en milieu inhabituel ou extrême, car j'aime les défis et la recherche d'innovation qui viennent avec ce genre de projet.",
    "about.bio.2":       "Dans le futur, j'aimerais être un pont entre l'architecture et les nouvelles technologies afin d'optimiser le travail des architectes. Les options que je vois pour moi sont de travailler comme architecte-programmeur, être consultant pour des firmes voulant intégrer les nouvelles technologies à leur pratique, ou travailler dans un environnement qui pousse les innovations constructives, environnementales ou technologiques.",
    "about.languages":   "Langues",

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
    "about.bio.1":       "Architecture student at Université Laval, currently on academic exchange at the École Nationale Supérieure d'Architecture de Lyon (ENSAL). I have always been drawn to both technology and design, which made my academic path an unconventional one. I studied in the highly technical and the highly creative before finding architecture, which for me is the perfect middle ground. I believe my varied interests are one of my greatest strengths, as they allow me to combine my love of technology and design. I am particularly interested in parametric tools like Grasshopper and in emerging technologies such as artificial intelligence. I also have a strong interest in architecture in unusual or extreme environments, as I enjoy the challenges and the drive for innovation that come with such projects.",
    "about.bio.2":       "In the future, I would like to be a bridge between architecture and new technologies in order to optimise the work of architects. The paths I envision for myself are working as an architect-programmer, consulting for firms wishing to integrate new technologies into their practice, or working in an environment that drives constructive, environmental, or technological innovation.",
    "about.languages":   "Languages",

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
