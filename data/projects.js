// data/projects.js
// ============================================================
// SOURCE UNIQUE de tous les projets du portfolio
//
// Pour remplacer les images :
//   - card (grille)  : changer "image"
//   - slides (détail): changer "image" dans chaque objet de "slides"
// Légendes dans les deux langues : captionFR / captionEN
// ============================================================

const PROJECTS = [
  {
    id: "the-nest",
    titleFR: "The Nest",
    titleEN: "The Nest",
    year: 2025,
    typeFR: "Réhabilitation patrimoniale",
    typeEN: "Heritage rehabilitation",
    location: "Champoly, France",
    // REMPLACER IMAGE GRILLE → "images/projects/the-nest.jpg"
    image: "https://picsum.photos/seed/the-nest/800/600",
    descriptionFR: "Réhabilitation du château des Cornes d'Urfé en hôtel. Façades paramétriques en bois, atrium avec puits de lumière et colonnes arborescentes conçus sous Grasshopper. Avec Manon Borrini · Atelier HTC, ENSAL, 2025",
    descriptionEN: "Rehabilitation of the Château des Cornes d'Urfé into a hotel. Parametric wooden facades, atrium with skylight and tree-like columns designed in Grasshopper. With Manon Borrini · Atelier HTC, ENSAL, 2025",
    sections: [
      {
        headingFR: "Programme",
        headingEN: "Programme",
        textFR: "Le projet est guidé par la géométrie du château : les murs de l'hôtel suivent ceux de la ruine, l'entrée principale actuelle est conservée et une entrée secondaire traverse le donjon par l'accès historique. Les espaces publics comme le restaurant se trouvent à l'extérieur du château dans une ancienne grange réhabilitée. Les espaces semi-privés — lobby, cour intérieure, bar avec terrasse — occupent la moitié du volume intérieur, sous la hauteur des murs afin de préserver la silhouette du château. L'autre moitié accueille les espaces privés : chambres, plateforme d'observation, salles de massage et locaux du personnel.",
        textEN: "The project is guided by the castle's geometry: the hotel walls follow those of the ruin, the existing main entrance is preserved, and a secondary entrance passes through the keep via the historic access. Public spaces such as the restaurant are located outside the castle in a rehabilitated barn. Semi-private spaces — lobby, inner courtyard, bar with terrace — occupy half the interior volume, kept below the wall height to preserve the castle's silhouette. The other half houses private spaces: bedrooms, observation platform, massage rooms, and staff areas.",
      },
      {
        headingFR: "Structure",
        headingEN: "Structure",
        textFR: "Une structure indépendante de poteaux-poutres, implantée à environ un mètre des ruines existantes, crée une zone tampon structurelle qui protège les murs historiques tout en permettant les tolérances de construction et la maintenance à long terme. Visuellement, le projet semble reposer sur le château, mais l'ensemble du système est autonome, garantissant à la fois durabilité structurelle et respect du bâti ancien.",
        textEN: "An independent post-and-beam structure set approximately one metre from the existing ruins creates a structural buffer zone protecting the historic walls while allowing construction tolerances and long-term maintenance. Visually, the project appears to rest on the castle, but the entire system is self-supporting, ensuring both structural durability and respect for the historic fabric.",
      },
      {
        headingFR: "Façade paramétrique",
        headingEN: "Parametric facade",
        textFR: "Les façades des nouveaux bâtiments sont conçues en bois afin de créer une distinction claire avec les ruines historiques. Un script Grasshopper génère des panneaux de dimensions et d'épaisseurs variables, rappelant l'irrégularité des murs de pierre. Sur la façade principale, les panneaux ayant l'épaisseur minimale sont automatiquement transformés en panneaux de verre, créant des ouvertures de formes irrégulières comme celles qui parsèment la ruine.",
        textEN: "New building facades are clad in wood to create a clear distinction from the historic ruins. A Grasshopper script generates panels of varying dimensions and thickness, echoing the irregularity of the stone walls. On the main facade, panels assigned the minimum thickness are automatically converted to glass, creating irregular openings that echo those eroded into the ruin over centuries.",
      },
      {
        headingFR: "Atrium et puits de lumière",
        headingEN: "Atrium and skylight",
        textFR: "La circulation horizontale s'organise autour d'un atrium éclairé par un puits de lumière. Un second script Grasshopper contrôle la géométrie de l'ellipse, le rayon et les panneaux de verre qui composent le puits. Les colonnes arborescentes qui le soutiennent — dont les dimensions, le nombre de branches et la trajectoire sont également paramétrables — assurent la transition entre la structure et la toiture.",
        textEN: "Horizontal circulation is organised around an atrium lit by a skylight. A second Grasshopper script controls the ellipse geometry, radius, and glass panel layout of the skylight. The tree-like columns supporting it — whose dimensions, branch count, and trajectory are all parametrically controlled — provide the transition between the structural system and the roof.",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Manon Borrini · Atelier HTC, ENSAL Lyon, 2025",
        textEN: "Manon Borrini · Atelier HTC, ENSAL Lyon, 2025",
      },
    ],
    slides: [
      {
        // REMPLACER → "images/projects/the-nest-01.jpg"
        image: "https://picsum.photos/seed/tn-01/1400/900",
        captionFR: "Rendu extérieur — intégration de l'hôtel dans les murs de la ruine",
        captionEN: "Exterior render — hotel integrated within the ruin walls",
      },
      {
        // REMPLACER → "images/projects/the-nest-02.jpg"
        image: "https://picsum.photos/seed/tn-02/1400/900",
        captionFR: "Rendu intérieur — atrium avec colonnes arborescentes et puits de lumière",
        captionEN: "Interior render — atrium with tree-like columns and skylight",
      },
      {
        // REMPLACER → "images/projects/the-nest-03.jpg"
        image: "https://picsum.photos/seed/tn-03/1600/900",
        captionFR: "Script Grasshopper — façade paramétrique en panneaux de bois de dimensions variables",
        captionEN: "Grasshopper script — parametric facade with variable-dimension wooden panels",
      },
    ],
  },
  {
    id: "residence-etudiante",
    titleFR: "Résidence Étudiante",
    titleEN: "Student Residence",
    year: 2024,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Villeurbanne, France",
    image: "https://picsum.photos/seed/residence/800/600",
    descriptionFR: "200 logements étudiants organisés autour d'une cour commune végétalisée. L'accent est mis sur les espaces de convivialité et la flexibilité des typologies.",
    descriptionEN: "200 student housing units organised around a shared green courtyard. Emphasis on convivial spaces and flexible typologies.",
    slides: [
      {
        image: "https://picsum.photos/seed/re-01/1400/900",
        captionFR: "Vue aérienne — organisation autour de la cour végétalisée centrale",
        captionEN: "Aerial view — organisation around the central green courtyard",
      },
      {
        image: "https://picsum.photos/seed/re-02/1200/800",
        captionFR: "Rez-de-chaussée — espaces communs et locaux associatifs",
        captionEN: "Ground floor — common spaces and association rooms",
      },
      {
        image: "https://picsum.photos/seed/re-03/800/1100",
        captionFR: "Logement type — studio de 18 m² en configuration double",
        captionEN: "Typical unit — 18 m² studio in double configuration",
      },
    ],
  },
  {
    id: "musee-memoire",
    titleFR: "Musée de la Mémoire",
    titleEN: "Museum of Memory",
    year: 2023,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Grenoble, France",
    image: "https://picsum.photos/seed/musee/800/600",
    descriptionFR: "Équipement culturel de 3 500 m² implanté sur un site industriel réhabilité. La structure en béton apparent dialogue avec les vestiges de l'ancienne usine.",
    descriptionEN: "3,500 m² cultural facility on a rehabilitated industrial site. The exposed concrete structure dialogues with the remnants of the former factory.",
    slides: [
      {
        image: "https://picsum.photos/seed/mm-01/1600/900",
        captionFR: "Implantation — dialogue entre le bâtiment neuf et les vestiges industriels",
        captionEN: "Site plan — dialogue between new building and industrial remains",
      },
      {
        image: "https://picsum.photos/seed/mm-02/1200/900",
        captionFR: "Hall d'entrée — béton apparent et lumière zénithale",
        captionEN: "Entrance hall — exposed concrete and zenithal light",
      },
      {
        image: "https://picsum.photos/seed/mm-03/900/1200",
        captionFR: "Galerie permanente — maquette de présentation 1:200",
        captionEN: "Permanent gallery — presentation model 1:200",
      },
    ],
  },
  {
    id: "logement-collectif",
    titleFR: "Îlot Habité",
    titleEN: "Inhabited Block",
    year: 2023,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Lyon, France",
    image: "https://picsum.photos/seed/ilot/800/600",
    descriptionFR: "48 logements sociaux et intermédiaires articulés autour d'un passage public. Réponse à la densification douce du tissu urbain existant.",
    descriptionEN: "48 social and intermediate housing units articulated around a public passage. A response to the gentle densification of the existing urban fabric.",
    slides: [
      {
        image: "https://picsum.photos/seed/lc-01/1400/900",
        captionFR: "Plan masse — intégration dans le tissu pavillonnaire existant",
        captionEN: "Site plan — integration within the existing residential fabric",
      },
      {
        image: "https://picsum.photos/seed/lc-02/1600/800",
        captionFR: "Coupe longitudinale — passage public traversant et jardins partagés",
        captionEN: "Longitudinal section — public passage and shared gardens",
      },
      {
        image: "https://picsum.photos/seed/lc-03/800/1000",
        captionFR: "Élévation principale — rythme des loggias et variation des matériaux",
        captionEN: "Main elevation — rhythm of loggias and material variation",
      },
    ],
  },
  {
    id: "amenagement-berges",
    titleFR: "Berges du Rhône",
    titleEN: "Rhône Riverbanks",
    year: 2023,
    typeFR: "Aménagement urbain",
    typeEN: "Urban design",
    location: "Lyon, France",
    image: "https://picsum.photos/seed/berges/800/600",
    descriptionFR: "Réaménagement d'un kilomètre de berges fluviales en promenade paysagère. Intégration d'équipements sportifs, culturels et de repos au fil de l'eau.",
    descriptionEN: "Redevelopment of one kilometre of riverbanks into a landscaped promenade. Integration of sports, cultural and recreational facilities along the water.",
    slides: [
      {
        image: "https://picsum.photos/seed/ab-01/1600/700",
        captionFR: "Plan de composition paysagère — trois séquences thématiques",
        captionEN: "Landscape composition plan — three thematic sequences",
      },
      {
        image: "https://picsum.photos/seed/ab-02/1400/900",
        captionFR: "Séquence centrale — estacade bois et scène flottante",
        captionEN: "Central sequence — timber jetty and floating stage",
      },
      {
        image: "https://picsum.photos/seed/ab-03/1200/900",
        captionFR: "Mobilier urbain — bancs intégrés en béton préfabriqué",
        captionEN: "Urban furniture — integrated precast concrete benches",
      },
    ],
  },
  {
    id: "renovation-patrimoine",
    titleFR: "Hôtel Particulier",
    titleEN: "Historic Townhouse",
    year: 2022,
    typeFR: "Rénovation patrimoniale",
    typeEN: "Heritage renovation",
    location: "Vieux-Lyon, France",
    image: "https://picsum.photos/seed/hotel/800/600",
    descriptionFR: "Reconversion d'un hôtel particulier du XVIIe siècle en espace culturel et résidentiel. Dialogue entre l'existant historique et les interventions contemporaines.",
    descriptionEN: "Conversion of a 17th-century townhouse into a cultural and residential space. Dialogue between the historic fabric and contemporary interventions.",
    slides: [
      {
        image: "https://picsum.photos/seed/rp-01/1200/900",
        captionFR: "Cour intérieure — état existant avant intervention",
        captionEN: "Inner courtyard — existing state before intervention",
      },
      {
        image: "https://picsum.photos/seed/rp-02/900/1200",
        captionFR: "Escalier d'honneur — restauration des boiseries XVIIe et nouvelle rampe",
        captionEN: "Main staircase — 17th-century woodwork restoration and new railing",
      },
      {
        image: "https://picsum.photos/seed/rp-03/1600/900",
        captionFR: "Galerie d'exposition — extension contemporaine en acier Corten",
        captionEN: "Exhibition gallery — contemporary Corten steel extension",
      },
    ],
  },
  {
    id: "habitat-individuel",
    titleFR: "Maison Bois",
    titleEN: "Timber House",
    year: 2022,
    typeFR: "Habitat individuel",
    typeEN: "Single-family house",
    location: "Ain, France",
    image: "https://picsum.photos/seed/maison/800/600",
    descriptionFR: "Maison passive en ossature bois sur une parcelle en pente. Organisation du plan en terrasses successives pour optimiser les vues et l'ensoleillement.",
    descriptionEN: "Passive timber-frame house on a sloping plot. Plan organised as successive terraces to optimise views and sunlight.",
    slides: [
      {
        image: "https://picsum.photos/seed/hi-01/1400/900",
        captionFR: "Vue depuis le jardin — terrasses successives et toiture végétalisée",
        captionEN: "View from the garden — successive terraces and green roof",
      },
      {
        image: "https://picsum.photos/seed/hi-02/1600/900",
        captionFR: "Séjour — double hauteur et mur vitré plein sud",
        captionEN: "Living room — double height and full south glazing",
      },
      {
        image: "https://picsum.photos/seed/hi-03/900/1200",
        captionFR: "Détail constructif — assemblage de l'ossature bois en CLT",
        captionEN: "Construction detail — CLT timber frame assembly",
      },
    ],
  },
  {
    id: "equipement-public",
    titleFR: "Médiathèque",
    titleEN: "Media Library",
    year: 2022,
    typeFR: "Équipement public",
    typeEN: "Public facility",
    location: "Bron, France",
    image: "https://picsum.photos/seed/mediatheque/800/600",
    descriptionFR: "Médiathèque de quartier de 1 800 m² ancrée dans un tissu pavillonnaire. La toiture végétalisée et les façades en brique locale renforcent l'ancrage territorial.",
    descriptionEN: "1,800 m² neighbourhood media library set within a residential fabric. The green roof and local brick facades reinforce the building's territorial rootedness.",
    slides: [
      {
        image: "https://picsum.photos/seed/ep-01/1400/900",
        captionFR: "Façade principale — brique locale et claustra en terre cuite",
        captionEN: "Main facade — local brick and terracotta brise-soleil",
      },
      {
        image: "https://picsum.photos/seed/ep-02/1600/800",
        captionFR: "Salle de lecture — lumière naturelle filtrée par la toiture végétalisée",
        captionEN: "Reading room — natural light filtered through the green roof",
      },
      {
        image: "https://picsum.photos/seed/ep-03/800/1100",
        captionFR: "Maquette — toiture et organisation intérieure à l'échelle 1:100",
        captionEN: "Physical model — roof and interior layout at 1:100 scale",
      },
    ],
  },
];
