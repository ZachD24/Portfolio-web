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
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/the-nest.jpg"
    image: "images/projects/the-nest.jpg",
    heroCaptionFR: "Rendu intérieur — atrium avec colonnes arborescentes et puits de lumière",
    heroCaptionEN: "Interior render — atrium with tree-like columns and skylight",
    descriptionFR: "Réhabilitation du château des Cornes d'Urfé en hôtel. Façades paramétriques en bois, atrium avec puits de lumière et colonnes arborescentes conçus sous Grasshopper. Avec Manon Borrini · Atelier HTC, ENSAL, 2025",
    descriptionEN: "Rehabilitation of the Château des Cornes d'Urfé into a hotel. Parametric wooden facades, atrium with skylight and tree-like columns designed in Grasshopper. With Manon Borrini · Atelier HTC, ENSAL, 2025",
    sections: [
      {
        headingFR: "Programme",
        headingEN: "Programme",
        textFR: "Le projet est guidé par la géométrie du château : les murs de l'hôtel suivent ceux de la ruine, l'entrée principale actuelle est conservée et une entrée secondaire traverse le donjon par l'accès historique. Les espaces publics comme le restaurant se trouvent à l'extérieur du château dans une ancienne grange réhabilitée. Les espaces semi-privés — lobby, cour intérieure, bar avec terrasse — occupent la moitié du volume intérieur, sous la hauteur des murs afin de préserver la silhouette du château. L'autre moitié accueille les espaces privés : chambres, plateforme d'observation, salles de massage et locaux du personnel.",
        textEN: "The project is guided by the castle's geometry: the hotel walls follow those of the ruin, the existing main entrance is preserved, and a secondary entrance passes through the keep via the historic access. Public spaces such as the restaurant are located outside the castle in a rehabilitated barn. Semi-private spaces — lobby, inner courtyard, bar with terrace — occupy half the interior volume, kept below the wall height to preserve the castle's silhouette. The other half houses private spaces: bedrooms, observation platform, massage rooms, and staff areas.",
        layout: "grid",
        images: [
          { src: "images/projects/the-nest-04.jpg", captionFR: "Plan de site", captionEN: "Site plan" },
          { src: "images/projects/the-nest-05.jpg", captionFR: "Plan d'étage", captionEN: "Floor plan" },
        ],
      },
      {
        headingFR: "Structure",
        headingEN: "Structure",
        textFR: "Une structure indépendante de poteaux-poutres, implantée à environ un mètre des ruines existantes, crée une zone tampon structurelle qui protège les murs historiques tout en permettant les tolérances de construction et la maintenance à long terme. Visuellement, le projet semble reposer sur le château, mais l'ensemble du système est autonome, garantissant à la fois durabilité structurelle et respect du bâti ancien.",
        textEN: "An independent post-and-beam structure set approximately one metre from the existing ruins creates a structural buffer zone protecting the historic walls while allowing construction tolerances and long-term maintenance. Visually, the project appears to rest on the castle, but the entire system is self-supporting, ensuring both structural durability and respect for the historic fabric.",
        layout: "grid",
        images: [
          { src: "images/projects/the-nest-02.jpg", captionFR: "Élévation", captionEN: "Elevation" },
          { src: "images/projects/the-nest-03.jpg", captionFR: "Coupe", captionEN: "Section" },
        ],
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
        image: "images/projects/the-nest-01.jpg",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Manon Borrini · Atelier HTC, ENSAL Lyon, 2025",
        textEN: "Manon Borrini · Atelier HTC, ENSAL Lyon, 2025",
      },
    ],
  },
  {
    id: "le-cercle",
    titleFR: "Le Cercle",
    titleEN: "The Circle",
    year: 2025,
    typeFR: "Projet universitaire",
    typeEN: "Academic project",
    location: "Île de Tekakwitha, Kahnawake",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/le-cercle.jpg"
    image: "images/projects/le-cercle.jpg",
    heroCaptionFR: "Rendu intérieur — lattes de bois en éventail, atelier principal",
    heroCaptionEN: "Interior render — fanned wooden slats, main workshop",
    descriptionFR: "Conception d'un centre d'interprétation culturelle pour les Mohawks de la réserve de Kahnawake, constitué d'un centre d'interprétation, d'un pavillon résidentiel et d'une école de métiers. Claude Fugère · Atelier 4, ARC-2012, Université Laval, 2025",
    descriptionEN: "Design of a cultural interpretation centre for the Mohawks of the Kahnawake reserve, comprising an interpretation centre, a residential pavilion, and a trades school. Claude Fugère · Atelier 4, ARC-2012, Université Laval, 2025",
    sections: [
      {
        headingFR: "Concept",
        headingEN: "Concept",
        textFR: "Symbole central dans la culture Mohawk, le cercle structure le projet : les bâtiments s'organisent autour d'un cœur commun, marqué par le feu sacré des conseils de clan. Par sa forme courbe et l'usage du bois, l'architecture évoque la maison longue traditionnelle. La toiture unifiée des espaces publics renforce la circularité et clarifie la distinction entre les bâtiments privés et collectifs, tandis qu'à l'arrière un sentier sensoriel relie le projet à la nature en racontant l'histoire des Mohawks.",
        textEN: "A central symbol in Mohawk culture, the circle structures the project: buildings are organised around a common heart marked by the sacred clan council fire. Through its curved form and use of wood, the architecture evokes the traditional longhouse. The unified roof over public spaces reinforces the circular layout and clarifies the distinction between private and collective buildings, while a sensory trail at the rear connects the project to nature and tells the story of the Mohawks.",
        layout: "grid",
        images: [
          { src: "images/projects/le-cercle-02.jpg", captionFR: "Maquette physique éclairée", captionEN: "Lit physical model" },
        ],
      },
      {
        headingFR: "Programme",
        headingEN: "Programme",
        textFR: "Le complexe comprend trois composantes : l'école des métiers (accueil, salles de formation théorique, ateliers pratiques, laboratoire d'innovation, espaces collaboratifs), le pavillon résidentiel (chambres, salon, cuisine collective, buanderie) et le centre d'interprétation culturelle (accueil, ateliers culturels, salle d'exposition principale, auditorium polyvalent, bureaux).",
        textEN: "The complex comprises three components: the trades school (reception, theoretical training rooms, practical workshops, innovation lab, collaborative spaces), the residential pavilion (bedrooms, lounge, communal kitchen, laundry), and the cultural interpretation centre (reception, cultural workshops, main exhibition hall, multipurpose auditorium, offices).",
        layout: "grid",
        images: [
          { src: "images/projects/le-cercle-05.jpg", captionFR: "Plan de masse", captionEN: "Site plan" },
          { src: "images/projects/le-cercle-06.jpg", captionFR: "Plan d'étage", captionEN: "Floor plan" },
        ],
      },
      {
        headingFR: "Élévations",
        headingEN: "Elevations",
        layout: "full",
        images: [
          { src: "images/projects/le-cercle-03.jpg", captionFR: "Élévation nord", captionEN: "North elevation" },
          { src: "images/projects/le-cercle-04.jpg", captionFR: "Élévation sud", captionEN: "South elevation" },
        ],
      },
      {
        headingFR: "Détails constructifs",
        headingEN: "Construction Details",
        textFR: "Les parois de l'atelier principal de l'école des métiers et de l'accueil du centre d'interprétation sont constituées de lattes de bois disposées en éventail, évoquant le mouvement naturel du grain de bois.",
        textEN: "The walls of the trades school's main workshop and the interpretation centre entrance are composed of fanned wooden slats that evoke the natural movement of wood grain.",
        image: "images/projects/le-cercle-01.jpg",
        imageCaptionFR: "Rendu intérieur du centre d'interprétation culturel",
        imageCaptionEN: "Interior render of the cultural interpretation centre",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Claude Fugère · Atelier 4, ARC-2012, Université Laval, 2025",
        textEN: "Claude Fugère · Atelier 4, ARC-2012, Université Laval, 2025",
      },
    ],
  },
  {
    id: "fantaisie-interieure",
    titleFR: "Fantaisie intérieure",
    titleEN: "Interior Fantasy",
    year: 2024,
    typeFR: "Réhabilitation patrimoniale",
    typeEN: "Heritage rehabilitation",
    location: "2–6 rue de l'Hôtel-Dieu, Québec",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/fantaisie-interieure.jpg"
    image: "images/projects/fantaisie-interieure.jpg",
    heroCaptionFR: "Rendu de la cour intérieure",
    heroCaptionEN: "Interior Courtyard Render",
    descriptionFR: "Réhabilitation des maisons Baillargé en résidence temporaire pour personnes atteintes du cancer, connectée par tunnel à l'Hôpital Hôtel-Dieu. Les circulations sont reportées sur des coursives extérieures et des passerelles sillonnent la cour. Szende Szenteu-Nejur · Atelier 3, ARC-2011, Université Laval, 2024",
    descriptionEN: "Rehabilitation of the Maisons Baillargé into temporary housing for cancer patients, connected by tunnel to the Hôtel-Dieu hospital. Circulation is moved to external walkways and bridges traverse the courtyard. Szende Szenteu-Nejur · Atelier 3, ARC-2011, Université Laval, 2024",
    sections: [
      {
        headingFR: "Programme",
        headingEN: "Programme",
        textFR: "La fonction proposée est une résidence temporaire pour personnes atteintes du cancer. Le programme a été choisi pour redonner au bâtiment une fonction dans le domaine de la santé et profiter de sa proximité à l'Hôpital Hôtel-Dieu, auquel il est connecté par un tunnel. La fonction a été choisie parce que l'hôpital se spécialise en cardiologie, mais il y a peu d'endroits à proximité où les patients suivant un traitement de longue durée peuvent séjourner.",
        textEN: "The proposed programme is temporary housing for cancer patients. The programme was chosen to restore a health-related function to the building and take advantage of its proximity to the Hôtel-Dieu hospital, to which it is connected by a tunnel. This function was selected because the hospital specialises in cardiology, but there are few nearby places where long-term patients can stay.",
        layout: "grid",
        images: [
          { src: "images/projects/fantaisie-interieure-03.jpg", captionFR: "Plan rez-de-chaussée", captionEN: "Ground floor plan" },
          { src: "images/projects/fantaisie-interieure-04.jpg", captionFR: "Plan type des logements", captionEN: "Typical floor plan" },
        ],
      },
      {
        headingFR: "Shéma de circulation",
        headingEN: "Circulation Diagram",
        textFR: "Afin de maximiser l'espace disponible à l'intérieur, les couloirs de circulation ont été placés sur des coursives extérieures. La circulation verticale peut se faire dans le bâtiment, à l'extrémité des coursives ou en empruntant les passerelles qui sillonnent la cour.",
        textEN: "To maximise usable interior space, circulation corridors were placed on external walkways. Vertical circulation can occur within the building, at the ends of the walkways, or by crossing the bridges that traverse the courtyard.",
        image: "images/projects/fantaisie-interieure-02.jpg",
      },
      {
        headingFR: "Élévation latérale",
        headingEN: "Lateral Elevation",
        textFR: "",
        textEN: "",
        image: "images/projects/fantaisie-interieure-01.jpg",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Szende Szenteu-Nejur · Atelier 3, ARC-2011, Université Laval, 2024",
        textEN: "Szende Szenteu-Nejur · Atelier 3, ARC-2011, Université Laval, 2024",
      },
    ],
  },
  {
    id: "les-deux-freres",
    titleFR: "Les Deux Frères",
    titleEN: "The Two Brothers",
    year: 2024,
    typeFR: "Multilogement",
    typeEN: "Multi-unit residential",
    location: "Rue Champlain, Québec",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/les-deux-freres.jpg"
    image: "images/projects/les-deux-freres.jpg",
    heroCaptionFR: "Rendu extérieur",
    heroCaptionEN: "Exterior render",
    descriptionFR: "Complexe multilogement sur la rue Champlain composé de deux bâtiments distincts — familial et étudiant — reliés par des coursives extérieures qui favorisent l'esprit communautaire. Avec Ève-Marie Girard · Louis Saint-Pierre · Atelier 2b, ARC-1012, Université Laval, 2024",
    descriptionEN: "A multi-unit residential complex on Rue Champlain composed of two distinct buildings — family and student — separated by a shared corridor fostering community spirit. With Ève-Marie Girard · Louis Saint-Pierre · Atelier 2b, ARC-1012, Université Laval, 2024",
    sections: [
      {
        headingFR: "Programme",
        headingEN: "Programme",
        textFR: "Le complexe est composé de deux bâtiments distincts : un bâtiment familial et un bâtiment étudiant qui sont reliés par des coursives. Les espaces extérieurs sont conçus pour encourager l'esprit communautaire entre les deux types de résidents.",
        textEN: "The complex consists of two distinct buildings: a family building and a student building, connected by external walkways. The outdoor spaces are designed to encourage community spirit between both types of residents.",
        layout: "grid",
        images: [
          { src: "images/projects/les-deux-freres-01.jpg", captionFR: "Montage Photoshop", captionEN: "Photoshop Montage — Rue Champlain" },
        ],
      },
      {
        headingFR: "Plans",
        headingEN: "Floor Plans",
        image: "images/projects/les-deux-freres-02.jpg",
      },
      {
        headingFR: "Élévations",
        headingEN: "Elevations",
        image: "images/projects/les-deux-freres-03.jpg",
      },
      {
        headingFR: "Regard critique",
        headingEN: "Critical Reflection",
        textFR: "Le résultat final est élégant et les plans fonctionnent bien. Le concept de séparer les appartements familiaux et étudiants en deux bâtiments tout en les connectant est réussi. Les coupes et plans pourraient être plus clairs en pochant les murs. La façade du bâtiment familial donnant sur le boulevard Champlain pourrait être plus intéressante architecturalement.",
        textEN: "The final result is elegant and the plans work well. The concept of separating family and student apartments across two connected buildings is successful. The sections and plans could be clearer with hatched walls. The facade of the family building facing Boulevard Champlain could be more architecturally interesting.",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Ève-Marie Girard · Louis Saint-Pierre · Atelier 2b, ARC-1012, Université Laval, 2024",
        textEN: "Ève-Marie Girard · Louis Saint-Pierre · Atelier 2b, ARC-1012, Université Laval, 2024",
      },
    ],
  },
  {
    id: "la-clairiere",
    titleFR: "La Clairière",
    titleEN: "The Clearing",
    year: 2024,
    typeFR: "Chalet privé",
    typeEN: "Private cottage",
    location: "Parc national de la Jacques-Cartier, Québec",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/la-clairiere.jpg"
    image: "images/projects/la-clairiere.jpg",
    heroCaptionFR: "Maquette",
    heroCaptionEN: "Model",
    descriptionFR: "Chalet conçu selon les préférences d'une camarade : ouverture sur la nature, terrasse donnant sur la rivière et espace pour accueillir des invités. Le toit porté par des colonnes laisse entrer un ruban de lumière naturelle et donne l'illusion de flotter. Louis Saint-Pierre · Atelier 2a, ARC-1112, Université Laval, 2024",
    descriptionEN: "A one-storey chalet designed to a classmate's preferences: openness to nature, a terrace overlooking the river, and space for guests. Columns support the roof, allowing a continuous glass ribbon to flood the interior with natural light and give the illusion of a floating roof. Louis Saint-Pierre · Atelier 2a, ARC-1112, Université Laval, 2024",
    sections: [
      {
        headingFR: "Objectif",
        headingEN: "Objective",
        textFR: "L'objectif est de concevoir un chalet dans la nature selon les préférences d'une camarade de classe. Les points importants étaient de réaliser un chalet d'un étage pour un couple avec une place de rassemblement pour accueillir des invités, le tout en étant le plus ouvert possible vers la nature.",
        textEN: "Design a nature retreat based on a classmate's preferences. The key requirements are a one-storey chalet for a couple with a gathering space for guests, as open as possible to the surrounding nature.",
        image: "images/projects/la-clairiere-01.jpg",
      },
      {
        headingFR: "Concept",
        headingEN: "Concept",
        textFR: "Une terrasse sur pilotis assez grande pour plusieurs personnes donne sur la rivière. Afin de faire entrer la nature dans le chalet, le toit est supporté par des colonnes, permettant de placer un ruban de verre en haut des murs. Cela fait entrer de la lumière naturelle partout dans le chalet, permet de percevoir le ciel dans n'importe quelle direction et donne l'illusion que la toiture flotte lorsqu'on approche l'avant du bâtiment. Les pilotis accentuent cet effet en faisant flotter le bâtiment entre le sol et le toit.",
        textEN: "A terrace on stilts large enough for several people overlooks the river. To bring nature inside, the roof is supported by columns, allowing a continuous glass ribbon along the top of the walls. This fills every space with natural light, frames views of the sky from any direction, and creates the illusion of a floating roof when approaching the front of the building. The stilts enhance this effect, making the building appear to float between the ground and the roof.",
        layout: "grid",
        images: [
          { src: "images/projects/la-clairiere-03.jpg", captionFR: "Élévation avant", captionEN: "Front elevation" },
          { src: "images/projects/la-clairiere-04.jpg", captionFR: "Élévation arrière", captionEN: "Rear elevation" },
        ],
      },
      {
        headingFR: "Plans",
        headingEN: "Plans",
        layout: "grid",
        images: [
          { src: "images/projects/la-clairiere-02.jpg", captionFR: "Plan de site", captionEN: "Site plan" },
          { src: "images/projects/la-clairiere-05.jpg", captionFR: "Coupe transversale", captionEN: "Cross section" },
        ],
      },
      {
        headingFR: "Regard critique",
        headingEN: "Critical Reflection",
        textFR: "La forme du chalet et la disposition des pièces pourraient être revues, car les nombreux angles aigus rendent le chalet difficile à meubler. La terrasse pourrait être ouverte plutôt qu'avec des bancs intégrés, pour plus de flexibilité. Les rendus 3D pourraient aussi être améliorés. Le concept du toit flottant grâce aux pilotis et colonnes reste la force du projet.",
        textEN: "The chalet's form and room layout could be reconsidered, as the many acute angles make furnishing difficult. The terrace could be left open rather than having built-in benches, offering more flexibility. The 3D renderings could also be improved. The concept of the floating roof through pilotis and columns remains the project's strength.",
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Louis Saint-Pierre · Atelier 2a, ARC-1112, Université Laval, 2024",
        textEN: "Louis Saint-Pierre · Atelier 2a, ARC-1112, Université Laval, 2024",
      },
    ],
  },
  {
    id: "1-62",
    titleFR: "1.62",
    titleEN: "1.62",
    year: 2024,
    typeFR: "Conceptualisation architecturale",
    typeEN: "Architectural conceptualisation",
    location: "Université Laval, Québec",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/1-62.jpg"
    image: "images/projects/1-62.png",
    heroCaptionFR: "Collage",
    heroCaptionEN: "Collage",
    descriptionFR: "Collage architectural réalisé par itération avec Midjourney : assemblage d'éléments en béton inspirés du style brutaliste de Tadao Ando, superposés en collage papier. Avec Jérémy Pelchat · Ariane Ouellet-Pelletier · ARC-2041, Université Laval, Automne 2024",
    descriptionEN: "Architectural collage created through iterative use of Midjourney: an assembly of concrete elements inspired by Tadao Ando's brutalist style, superimposed as a paper collage. With Jérémy Pelchat · Ariane Ouellet-Pelletier · ARC-2041, Université Laval, Fall 2024",
    sections: [
      {
        headingFR: "Démarche",
        headingEN: "Process",
        textFR: "L'objectif était d'explorer les possibiliter formelles du béton en créant un collage, une maquette et une coupe d'un bâtiment fictif ayant la forme de la maquette. L'outil de génération d'image par IA Midjourney a été utilisé pour créer le collage à partir de maquettes, de photos et de dessins. Plusieurs essais ont été réalisés avec Midjourney avant d'obtenir l'image d'origine à partir duquel des modifications successives ont été apportées afin d'obtenir le rendu souhaité.",
        textEN: "The objective was to explore the formal possibilities of concrete by creating a collage, a model, and a section of a fictitious building based on the model's form. The AI image generator Midjourney was used to create the collage from models, photos, and drawings. Several attempts were made with Midjourney before obtaining the original image, from which successive modifications were made to achieve the desired rendering.",
        layout: "grid",
        images: [
          // IMAGE 04 → remplacer par : "images/projects/1-62-04.jpg"
          { src: "images/projects/1-62-04.jpg", captionFR: "", captionEN: "" },
          // IMAGE 05 → remplacer par : "images/projects/1-62-05.jpg"
          { src: "images/projects/1-62-05.jpg", captionFR: "", captionEN: "" },
          // IMAGE 06 → remplacer par : "images/projects/1-62-06.jpg"
          { src: "images/projects/1-62-06.jpg", captionFR: "", captionEN: "" },
        ],
      },
      {
        headingFR: "Maquette et coupe",
        headingEN: "Model and Section",
        textFR: "",
        textEN: "",
        images: [
          // IMAGE 01 → remplacer par : "images/projects/1-62-01.jpg"
          { src: "images/projects/1-62-01.jpg", captionFR: "", captionEN: "" },
          // IMAGE 02 → remplacer par : "images/projects/1-62-02.jpg"
          { src: "images/projects/1-62-02.jpg", captionFR: "", captionEN: "" },
          // IMAGE 03 → remplacer par : "images/projects/1-62-03.jpg"
          { src: "images/projects/1-62-03.jpg", captionFR: "", captionEN: "" },
        ],
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Jérémy Pelchat · Ariane Ouellet-Pelletier · ARC-2041, Université Laval, Automne 2024",
        textEN: "Jérémy Pelchat · Ariane Ouellet-Pelletier · ARC-2041, Université Laval, Fall 2024",
      },
    ],
  },
  {
    id: "le-mirage",
    titleFR: "Le Mirage",
    titleEN: "The Mirage",
    year: 2025,
    typeFR: "Expérimentation numérique",
    typeEN: "Digital experimentation",
    location: "Université Laval, Québec",
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/le-mirage.jpg"
    image: "images/projects/le-mirage.jpg",
    heroCaptionFR: "Rendu extérieur",
    heroCaptionEN: "Exterior render",
    descriptionFR: "Exploration de la présence d'une structure monolithique paramétrique dans un désert de sable. Un mur Grasshopper à modules en saillie crée un jeu de lumière et d'ombre évoquant l'illusion du mirage. Avec Jérémy Pelchat, Jade Tremblay, Laura Henrichon · Samuel Bernier-Lavigne · ARC-2042, Université Laval, Hiver 2025",
    descriptionEN: "An exploration of a parametric monolithic structure in a sand desert. A Grasshopper wall of protruding modules creates an interplay of light and shadow evoking the illusion of the mirage. With Jérémy Pelchat, Jade Tremblay, Laura Henrichon · Samuel Bernier-Lavigne · ARC-2042, Université Laval, Winter 2025",
    sections: [
      {
        headingFR: "Concept",
        headingEN: "Concept",
        textFR: "L'objectif du projet était de de placer une structure paramétrique dans un environnement inhabituel. Nous avons choisi de placer une structure monolithique qui fait contrast au désert de sable qui l'entoure. Malgré cette dualité, le mur de briques paramétriques forme un mouvement qui fait écho aux dunes de sable.",
        textEN: "The goal of the project was to place a parametric structure in an unusual environment. We chose to place a monolithic structure that contrasts with the surrounding sand desert. Despite this duality, the parametric brick wall forms a movement that echoes the sand dunes.",
        layout: "grid",
        images: [
          // IMAGE 01 → remplacer par : "images/projects/le-mirage-01.jpg"
          { src: "images/projects/le-mirage-01.jpg", captionFR: "Rendu extérieur", captionEN: "Exterior render" },
          // IMAGE 02 → remplacer par : "images/projects/le-mirage-02.jpg"
          { src: "images/projects/le-mirage-02.jpg", captionFR: "Rendu intérieur", captionEN: "Interior render" },
        ],
      },
      {
        headingFR: "Script Grasshopper",
        headingEN: "Grasshopper Script",
        textFR: "Un script Grasshopper contrôle la géométrie du mur paramétrique permetant de controler le mouvement de la façade et la distribution des briques selon des paramètres ajustables.",
        textEN: "A Grasshopper script controls the parametric wall geometry, allowing the facade modules to vary in depth and distribution according to adjustable parameters.",
        layout: "flex",
        images: [
          // IMAGE 03 → remplacer par : "images/projects/le-mirage-03.jpg"
          { src: "images/projects/le-mirage-03.jpg", captionFR: "Script Grasshopper — paramètres de façade", captionEN: "Grasshopper script — facade parameters" },
          // IMAGE 04 → remplacer par : "images/projects/le-mirage-04.jpg"
          { src: "images/projects/le-mirage-04.jpg", captionFR: "Détail du mur paramétrique", captionEN: "Parametric wall detail" },
        ],
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Jérémy Pelchat, Jade Tremblay, Laura Henrichon · Samuel Bernier-Lavigne · ARC-2042, Université Laval, Hiver 2025",
        textEN: "Jérémy Pelchat, Jade Tremblay, Laura Henrichon · Samuel Bernier-Lavigne · ARC-2042, Université Laval, Winter 2025",
      },
    ],
  },
  {
    id: "uni-sons",
    titleFR: "UNI-SONS",
    titleEN: "UNI-SONS",
    year: 2022,
    typeFR: "Design de produits",
    typeEN: "Product design",
    location: "Université Laval, Québec",
    heroCover: false,
    // IMAGE CARTE (grille + accueil) → remplacer par : "images/projects/uni-sons.jpg"
    image: "images/projects/uni-sons-01.jpg",
    heroCaptionFR: "Produit final",
    heroCaptionEN: "Final product",
    descriptionFR: "Jouet sensoriel en bois prenant la forme d'animaux emboîtables qui produisent des sons. Chaque animal intègre un module sonore activé par la manipulation. Avec Kalina Alarie, Audrey Bergeron · Gabrielle Roberge · DES-1710, Université Laval, Automne 2022",
    descriptionEN: "A sensory wooden toy in the shape of interlocking animals that produce sounds. Each animal integrates a sound module activated by handling. With Kalina Alarie, Audrey Bergeron · Gabrielle Roberge · DES-1710, Université Laval, Fall 2022",
    sections: [
      {
        headingFR: "Concept",
        headingEN: "Concept",
        textFR: "UNI-SONS est un jouet sensoriel en bois visant en aider le développement des enfants en bas âge. Chaque pièce prend la forme d'une moitié d'animal qui créent des sons différent lorsqu'on les secoue en fonction des particules qui sont à l'intérieur. L'objectif est de stimuler les sens des enfants tout en favorisant leur motricité fine en leur donnant le défi de trouver les bonnes combinaisons de pièces à l'aide des sons.",
        textEN: "UNI-SONS is a sensory wooden toy aimed at supporting the development of young children. Each piece takes the shape of half an animal that produces different sounds when shaken, depending on the particles inside. The goal is to stimulate children's senses while promoting fine motor skills by challenging them to find the correct combinations of pieces using the sounds.",
      },
      {
        headingFR: "Prototypage",
        headingEN: "Prototyping",
        textFR: "Le processus de conception a inclus la fabrication de prototypes en carton pour tester les formes et l'assemblage. Une version finale en bois a finalement été réalisée à la main dans un atelier de menuiserie.",
        textEN: "The design process included building cardboard prototypes to test forms and assembly, followed by a final version handcrafted in a woodworking workshop.",
        layout: "grid",
        images: [
          // IMAGE 1 → remplacer par : "images/projects/uni-sons-01.jpg"
          { src: "images/projects/uni-sons-02.jpg", captionFR: "Prototypes en carton", captionEN: "Cardboard prototypes" },
          // IMAGE 2 → remplacer par : "images/projects/uni-sons-02.jpg"
          { src: "images/projects/uni-sons-03.jpg", captionFR: "Axonométrie explosée", captionEN: "Exploded axonometric" },
          // IMAGE 3 → remplacer par : "images/projects/uni-sons-03.jpg"
          { src: "images/projects/uni-sons-04.jpg", captionFR: "Coupe technique", captionEN: "Technical section" },
        ],
      },
      {
        headingFR: "Instructions",
        headingEN: "Instructions",
        layout: "numbered",
        images: [
          // IMAGE 4 → remplacer par : "images/projects/uni-sons-04.jpg"
          { src: "images/projects/uni-sons-05.jpg", captionFR: "", captionEN: "" },
          // IMAGE 5 → remplacer par : "images/projects/uni-sons-05.jpg"
          { src: "images/projects/uni-sons-06.jpg", captionFR: "", captionEN: "" },
          // IMAGE 6 → remplacer par : "images/projects/uni-sons-06.jpg"
          { src: "images/projects/uni-sons-07.jpg", captionFR: "", captionEN: "" },
        ],
      },
      {
        headingFR: "Réalisé avec",
        headingEN: "Credits",
        textFR: "Kalina Alarie, Audrey Bergeron · Gabrielle Roberge · DES-1710, Université Laval, Automne 2022",
        textEN: "Kalina Alarie, Audrey Bergeron · Gabrielle Roberge · DES-1710, Université Laval, Fall 2022",
      },
    ],
  },
];
