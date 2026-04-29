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
    image: "images/placeholder.svg",
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
        image: "images/placeholder.svg",
        captionFR: "Rendu extérieur — intégration de l'hôtel dans les murs de la ruine",
        captionEN: "Exterior render — hotel integrated within the ruin walls",
      },
      {
        // REMPLACER → "images/projects/the-nest-02.jpg"
        image: "images/placeholder.svg",
        captionFR: "Rendu intérieur — atrium avec colonnes arborescentes et puits de lumière",
        captionEN: "Interior render — atrium with tree-like columns and skylight",
      },
      {
        // REMPLACER → "images/projects/the-nest-03.jpg"
        image: "images/placeholder.svg",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        captionEN: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Ut enim ad minim veniam, quis nostrud exercitation.",
        captionEN: "Ut enim ad minim veniam, quis nostrud exercitation.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Duis aute irure dolor in reprehenderit in voluptate.",
        captionEN: "Duis aute irure dolor in reprehenderit in voluptate.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Excepteur sint occaecat cupidatat non proident.",
        captionEN: "Excepteur sint occaecat cupidatat non proident.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        captionEN: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Ut enim ad minim veniam, quis nostrud exercitation.",
        captionEN: "Ut enim ad minim veniam, quis nostrud exercitation.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Duis aute irure dolor in reprehenderit in voluptate.",
        captionEN: "Duis aute irure dolor in reprehenderit in voluptate.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Excepteur sint occaecat cupidatat non proident.",
        captionEN: "Excepteur sint occaecat cupidatat non proident.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        captionEN: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Ut enim ad minim veniam, quis nostrud exercitation.",
        captionEN: "Ut enim ad minim veniam, quis nostrud exercitation.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Duis aute irure dolor in reprehenderit in voluptate.",
        captionEN: "Duis aute irure dolor in reprehenderit in voluptate.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Excepteur sint occaecat cupidatat non proident.",
        captionEN: "Excepteur sint occaecat cupidatat non proident.",
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
    image: "images/placeholder.svg",
    descriptionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    descriptionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    slides: [
      {
        image: "images/placeholder.svg",
        captionFR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        captionEN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Sed do eiusmod tempor incididunt ut labore et dolore.",
        captionEN: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "images/placeholder.svg",
        captionFR: "Ut enim ad minim veniam, quis nostrud exercitation.",
        captionEN: "Ut enim ad minim veniam, quis nostrud exercitation.",
      },
    ],
  },
];
