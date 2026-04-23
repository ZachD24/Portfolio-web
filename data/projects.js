// data/projects.js
// ============================================================
// SOURCE UNIQUE de tous les projets du portfolio
// Pour remplacer une image : changer la valeur de "image"
//   par le chemin local, ex : "images/projects/mon-projet.jpg"
// Pour modifier un titre/description : éditer les champs FR/EN
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
    // REMPLACER IMAGE → "images/projects/tour-lumiere.jpg"
    image: "https://picsum.photos/seed/tour-lumiere/800/600",
    descriptionFR: "Immeuble de bureaux mixte de 22 étages avec façade double-peau bioclimatique. Le projet explore la relation entre lumière naturelle et espace de travail collectif.",
    descriptionEN: "22-floor mixed office tower with a bioclimatic double-skin facade. The project explores the relationship between natural light and collective workspaces.",
  },
  {
    id: "residence-etudiante",
    titleFR: "Résidence Étudiante",
    titleEN: "Student Residence",
    year: 2024,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Villeurbanne, France",
    // REMPLACER IMAGE → "images/projects/residence-etudiante.jpg"
    image: "https://picsum.photos/seed/residence/800/600",
    descriptionFR: "200 logements étudiants organisés autour d'une cour commune végétalisée. L'accent est mis sur les espaces de convivialité et la flexibilité des typologies.",
    descriptionEN: "200 student housing units organised around a shared green courtyard. Emphasis on convivial spaces and flexible typologies.",
  },
  {
    id: "musee-memoire",
    titleFR: "Musée de la Mémoire",
    titleEN: "Museum of Memory",
    year: 2023,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Grenoble, France",
    // REMPLACER IMAGE → "images/projects/musee-memoire.jpg"
    image: "https://picsum.photos/seed/musee/800/600",
    descriptionFR: "Équipement culturel de 3 500 m² implanté sur un site industriel réhabilité. La structure en béton apparent dialogue avec les vestiges de l'ancienne usine.",
    descriptionEN: "3,500 m² cultural facility on a rehabilitated industrial site. The exposed concrete structure dialogues with the remnants of the former factory.",
  },
  {
    id: "logement-collectif",
    titleFR: "Îlot Habité",
    titleEN: "Inhabited Block",
    year: 2023,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Lyon, France",
    // REMPLACER IMAGE → "images/projects/logement-collectif.jpg"
    image: "https://picsum.photos/seed/ilot/800/600",
    descriptionFR: "48 logements sociaux et intermédiaires articulés autour d'un passage public. Réponse à la densification douce du tissu urbain existant.",
    descriptionEN: "48 social and intermediate housing units articulated around a public passage. A response to the gentle densification of the existing urban fabric.",
  },
  {
    id: "amenagement-berges",
    titleFR: "Berges du Rhône",
    titleEN: "Rhône Riverbanks",
    year: 2023,
    typeFR: "Aménagement urbain",
    typeEN: "Urban design",
    location: "Lyon, France",
    // REMPLACER IMAGE → "images/projects/amenagement-berges.jpg"
    image: "https://picsum.photos/seed/berges/800/600",
    descriptionFR: "Réaménagement d'un kilomètre de berges fluviales en promenade paysagère. Intégration d'équipements sportifs, culturels et de repos au fil de l'eau.",
    descriptionEN: "Redevelopment of one kilometre of riverbanks into a landscaped promenade. Integration of sports, cultural and recreational facilities along the water.",
  },
  {
    id: "renovation-patrimoine",
    titleFR: "Hôtel Particulier",
    titleEN: "Historic Townhouse",
    year: 2022,
    typeFR: "Rénovation patrimoniale",
    typeEN: "Heritage renovation",
    location: "Vieux-Lyon, France",
    // REMPLACER IMAGE → "images/projects/renovation-patrimoine.jpg"
    image: "https://picsum.photos/seed/hotel/800/600",
    descriptionFR: "Reconversion d'un hôtel particulier du XVIIe siècle en espace culturel et résidentiel. Dialogue entre l'existant historique et les interventions contemporaines.",
    descriptionEN: "Conversion of a 17th-century townhouse into a cultural and residential space. Dialogue between the historic fabric and contemporary interventions.",
  },
  {
    id: "habitat-individuel",
    titleFR: "Maison Bois",
    titleEN: "Timber House",
    year: 2022,
    typeFR: "Habitat individuel",
    typeEN: "Single-family house",
    location: "Ain, France",
    // REMPLACER IMAGE → "images/projects/habitat-individuel.jpg"
    image: "https://picsum.photos/seed/maison/800/600",
    descriptionFR: "Maison passive en ossature bois sur une parcelle en pente. Organisation du plan en terrasses successives pour optimiser les vues et l'ensoleillement.",
    descriptionEN: "Passive timber-frame house on a sloping plot. Plan organised as successive terraces to optimise views and sunlight.",
  },
  {
    id: "equipement-public",
    titleFR: "Médiathèque",
    titleEN: "Media Library",
    year: 2022,
    typeFR: "Équipement public",
    typeEN: "Public facility",
    location: "Bron, France",
    // REMPLACER IMAGE → "images/projects/equipement-public.jpg"
    image: "https://picsum.photos/seed/mediatheque/800/600",
    descriptionFR: "Médiathèque de quartier de 1 800 m² ancrée dans un tissu pavillonnaire. La toiture végétalisée et les façades en brique locale renforcent l'ancrage territorial.",
    descriptionEN: "1,800 m² neighbourhood media library set within a residential fabric. The green roof and local brick facades reinforce the building's territorial rootedness.",
  },
];
