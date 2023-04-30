import './style.css';

export default () => {
  return (
    <div className="resume__common__container">
      <h1>Soft Skills</h1>
      <div className="resume__soft__skills__container">
        <div className="resume__soft__skills__list">
          <div className="wrapper">
            <p>Travail en équipe</p>
            <span>
              De nombreux projets ou travaux effectués en groupes (de 2 à 7) sur
              divers domaines : traitement d’images, modélisation géométrique,
              rendu 3D, développement de jeux.
            </span>
          </div>
          <div className="wrapper">
            <p>Gestion de projet</p>
            <span>
              Mise en place et organisation de nombreux projets: <br />
              <br />
              • Module de projet de programmation au cours du M1 : Mise en place
              d'un ray tracer implémentant la technique de rendu via photon
              mapping. <br /> <br />
              • Workshop sur la mise en place d'une maquette intéractive lors de
              la semaine de l'antropocène organisé par le laboratoire Labex IMU
              (Lyon) <br />
              <br /> • Projet de fin d'étude : développement d'un jeu sous EU5
              au sein d'une équipe de 12 étudiants de Gamagora
            </span>
          </div>
          <div className="wrapper">
            <p>Autonomie</p>
            <span>
              Habitué à structurer mon travail et à prendre des initiatives.
              Compétence indispensable pour réussir à l'Université et en
              entreprise.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
