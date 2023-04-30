import './style.css';

export default () => {
  return (
    <div className="resume__common__container">
      <h1>Expériences</h1>
      <div className="resume__work__container">
        <div className="resume__work__list">
          <div className="wrapper">
            <p>2023 - 4 mois</p>
            <div className="content">
              <p>Jeu de fin d'étude : Sans Logique</p>
              <p>Gamagora, Université Lumière Lyon 2</p>
              <p>
                Développeur à plein temps au sein d'une équipe de 12 personnes
                mêlant des programmeurs, level designers et infographistes 3D.
              </p>
            </div>
          </div>

          <div className="wrapper">
            <p>2021 - 3 mois</p>
            <div className="content">
              <p>
                Stage : mise en place d'une IHM et d'outils d'analyse
                automatique d'images
              </p>
              <p>Laboratoire XLIM, Poitiers</p>
              <p>
                Visualisation 3D et analyse quantitative de l'innervation
                cardiaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
