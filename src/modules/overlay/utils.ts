export const getTechnologyIcon = (technology: string) => {
  switch (technology) {
    case 'Cpp':
      return './assets/technologies/cpp.png';
    case 'GameMaker':
      return './assets/technologies/gameMaker.png';
    case 'Unity':
      return './assets/technologies/unity.png';
    case 'Unreal':
      return './assets/technologies/UE5.png';
    case 'OpenGL':
      return './assets/technologies/OpenGL.png';
    default:
      return './assets/technologies/unknown.png';
  }
};
