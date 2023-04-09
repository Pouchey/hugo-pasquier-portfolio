import Reveal from '_components/reveal';

import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();

  return (
    <Reveal type="zoomIn" className="landing__home" threshold={0.1}>
      <div className="landing__home__present">
        <h1 className="landing__title">
          <span className="landing__highlight">Hugo Pasquier</span>
        </h1>
        <h2 className="landing__subtitle">Développeur de Jeux Vidéo</h2>
      </div>

      <div className="landing__description">
        <p>
          Actuellement étudiant à Gamagora dans le M2 informatique : Ingénierie
          du jeu vidéo (Université Lumière Lyon 2).
          <br />
          <br />
          Avant d'arriver à cette dernière année de Master, j'ai obtenu une
          licence informatique à l'Université de Poitiers, ainsi qu'une première
          année de Master en informatique pour l'image et le son à l'Université
          de Bordeaux.
          <br />
          <br />
          Je me suis spécialisé dans le développement de jeux vidéo, pour
          évoluer au sein d'un milieu qui me passionne et parce que tout ce qui
          tourne autour du rendu d'image et du game design m'intéresse
          énormément.
        </p>
      </div>
      <span
        className="landing__home__resume"
        onClick={() => dispatchResume({ type: 'openResume' })}
      >
        Voir mon CV
      </span>
    </Reveal>
  );
};
