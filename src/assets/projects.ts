export default [
  {
    name: 'Sans Logique ',
    short: 'Sans Logique',
    description: `
      Sans logique est un jeu de puzzle / aventure mettant le joueur en immersion dans un monde étrange et fantastique. 
      Le joueur va devoir résoudre des énigmes en s'aventurant toujours plus profondément dans ce monde mélangeant rêve et réalité.\n 
      C'est un jeu de fin d'étude en cours de développement, qui réunie une équipe de 12 étudiant du pôle Gamagora (Université Lumière Lyon 2)
      composée de Level / Game Designers,d'infographistes 3D et de Programmeurs. 
      Le jeu est développé sous Unreal Engine 5.
    `,
    image: './assets/SansLogique/thumbnail.png',
    slider: ['./assets/SansLogique/thumbnail.png'],
    release: '12 mai 2023',
  },
  {
    name: 'Radial Jump',
    short: 'Radial Jump',
    description: `
      Jeu de puzzle à la première personne s'inspirant de Portal. 
      Il est fait sous Unity. \n 
      Radial Jump est un jeu où le joeur doit compléter différents niveaux en résolvant des puzzles. 
      Pour ce faire, il doit utiliser différents objets obtenu au fil du jeu et jouer avec plusieurs mécaniques tel que le changement de gravité ou le placement de plateformes.
       Ce jeu a été développé sous Unity avec Nicolas Vivier et Wesley Petit au sein de notre formation à Gamagora (Université Lumière Lyon 2)
    `,
    image: './assets/RadialJump/Level2_1.gif',
    slider: [
      './assets/RadialJump/Level1_1.gif',
      './assets/RadialJump/Level1_2.gif',
      './assets/RadialJump/Level2_1.gif',
      './assets/RadialJump/Level2_2.gif',
      './assets/RadialJump/Level3.gif',
    ],
    github: 'https://github.com/HugoPasquier/RadialJump',
    itchio: 'https://nicovi.itch.io/radialjump',
  },
  {
    name: "Générateur d'abres",
    short: 'Généreation procédurale sous Unity.',
    description: `
      Ce générateur procédurale d'abres est un projet réalisé sous Unity en utilisant la génération par L-systems stochastiques.
      Cela reste un prototype, mais le but est de ce projet et de générer des modèles d'arbres 3D qui correspondent à certains critères donnés tout en incluant de l'aléatoire.
      De plus nous souhaitions que cela prennent la forme d'un outil pouvant être utilisé par des infographiste 3D, devant donc être assez facile à prendre en main.\n
      Ce projet a été mis en place avec Nicolas Vivier et Kevin Francfort au sein de notre formation à Gamagora (Université Lumière Lyon 2).
    `,
    image: './assets/TreeGenerator/shader_animation.gif',
    slider: [
      './assets/TreeGenerator/editor_animation.gif',
      './assets/TreeGenerator/img_tree_1.png',
      './assets/TreeGenerator/img_tree_2.png',
      './assets/TreeGenerator/img_tree_3.png',
      './assets/TreeGenerator/shader_animation.gif',
    ],
    github: 'https://github.com/HugoPasquier/Tree_Generation_Unity',
  },
  {
    name: 'Nano defense',
    short: 'Nano defense',
    description: `
      Nano Defense est un jeu développé lors d'une game jam de 48 H sur le thème « virus » Le
      joueur incarne un nanorobot en forme d'anticorps injecté dans le corps pour combattre tout type
      de virus C'est un jeu de scoring utilisant le principe du « hit and run », étant donné que le
      mouvement et le tir suivent tous deux le curseur de la souris Le jeu a été réalisé avec Game
      Maker Studio 2 Le jeu a été fait avec l'aide d'un ami qui a créé la grande majorité des éléments
      visuels
    `,
    image: './assets/NanoDefense/Start_Screen.png',
    slider: [
      './assets/NanoDefense/Start_Screen.png',
      './assets/NanoDefense/Gameplay_1.png',
      './assets/NanoDefense/Gameplay_2.png',
      './assets/NanoDefense/GameOver_Screen.png',
    ],
    github: 'https://github.com/HugoPasquier/Nano-Defense',
  },
  {
    name: 'Earth OpenGL',
    short: 'Earth OpenGL',
    description: `
      Projet en OpenGL qui fait un rendu d'une sphère avec une combinaison de différentes texture et d'une normal map donnant l'illusion de relief.
      Ce projet est basé sur le cours "Monde 3D" de Pierre Benard et Gaël Guennebaud à l'Université de Bordeaux.
    `,
    image: './assets/EarthOpenGL/Normal_mapping.png',
    slider: [
      './assets/EarthOpenGL/Normal_mapping.png',
      './assets/EarthOpenGL/Jour.png',
      './assets/EarthOpenGL/Nuit.png',
      './assets/EarthOpenGL/Mix_nuage.png',
      './assets/EarthOpenGL/Mix_nuage_nuit.png',
      './assets/EarthOpenGL/Simulation_soleil.png',
    ],
    github: 'https://github.com/HugoPasquier/EarthOpenGL',
  },
  {
    name: 'Ray Tracer',
    short: 'Ray Tracer',
    description: `
      Implémentation d'un lanceur de rayon intégrant l'illuminsation directe, des ombres simples et la reflexion.
      Ce projet a été fait en C++ et est basé sur le cours de synthèse d'image de Guillaume Bouchard au sein de la formation Gamagora (Universite Lumière Lyon 2)
    `,
    image: './assets/RayTracer/red_mat_and_mirror_spheres.png',
    slider: [
      './assets/RayTracer/red_mat_and_mirror_spheres.png',
      './assets/RayTracer/red_mat_spheres.png',
      './assets/RayTracer/mirror_spheres.png',
    ],
    github: 'https://github.com/HugoPasquier/RayTracer_Gamagora',
  },
];
