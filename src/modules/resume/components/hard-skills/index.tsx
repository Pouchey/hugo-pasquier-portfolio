import './style.css';

export default () => {
  return (
    <div className="resume__common__container">
      <h1>Hard Skills</h1>
      <div className="resume__hard__skills__container">
        <div className="resume__hard__skills_technologies">
          <img src="/assets/technologies/cpp.png" alt="cpp" />
          <img src="/assets/technologies/csharp.png" alt="csharp" />
          <img src="/assets/technologies/OpenGL.png" alt="openGL" />
          <img src="/assets/technologies/UE5.png" alt="UE5" />
          <img src="/assets/technologies/unity.png" alt="unity" />
        </div>
        <div className="resume__hard__skills__list">
          <p>Programmation Gameplay : exemple</p>
          <p>Synthèse d'image : exemple</p>
          <p>Modélisation Géométrique : exemple</p>
          <p>Intelligence Artificielle : exemple</p>
          <p>Traitement de l'image et du son : exemple</p>
        </div>
      </div>
    </div>
  );
};
