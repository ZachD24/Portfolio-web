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
    id: "tour-lumiere",
    titleFR: "Tour Lumière",
    titleEN: "Light Tower",
    year: 2024,
    typeFR: "Concours international",
    typeEN: "International competition",
    location: "Lyon, France",
    // REMPLACER IMAGE GRILLE → "images/projects/tour-lumiere.jpg"
    image: "https://picsum.photos/seed/tour-lumiere/800/600",
    descriptionFR: "Immeuble de bureaux mixte de 22 étages avec façade double-peau bioclimatique. Le projet explore la relation entre lumière naturelle et espace de travail collectif.",
    descriptionEN: "22-floor mixed office tower with a bioclimatic double-skin facade. The project explores the relationship between natural light and collective workspaces.",
    slides: [
      {
        // REMPLACER → "images/projects/tour-lumiere-01.jpg"
        image: "https://picsum.photos/seed/tl-01/1400/900",
        captionFR: "Vue d'ensemble depuis le quai — perspective nord-ouest",
        captionEN: "Overview from the quay — north-west perspective",
      },
      {
        // REMPLACER → "images/projects/tour-lumiere-02.jpg"
        image: "https://picsum.photos/seed/tl-02/900/1300",
        captionFR: "Détail de la façade double-peau en position estivale",
        captionEN: "Double-skin facade detail in summer configuration",
      },
      {
        // REMPLACER → "images/projects/tour-lumiere-03.jpg"
        image: "https://picsum.photos/seed/tl-03/1600/900",
        captionFR: "Coupe transversale — circulation verticale et plateaux de bureaux",
        captionEN: "Cross-section — vertical circulation and office floors",
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
