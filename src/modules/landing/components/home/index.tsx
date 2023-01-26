import Reveal from '_components/reveal';

import { useResumeContext } from '_modules/resume/hooks/useContext';

import './style.css';

export default () => {
  const { dispatch: dispatchResume } = useResumeContext();

  return (
    <section className="landing-home">
      <Reveal
        type="zoomIn"
        className="landing-home-present"
        treshold={0.5}
        delay={600}
      >
        <h1 className="landing-title">
          <span className="landing-highlight">Hugo Pasquier</span>
        </h1>
        <h2 className="landing-subtitle">
          Développeur de Jeux Vidéo
        </h2>
      </Reveal>

      <Reveal
        type="zoomIn"
        className="landing-home-description"
        treshold={0.5}
        delay={600}
      >
        <p className="landing-description">
          Actuellement étudiant à Gamagora dans le M2 informatique : 
          Ingénierie du jeu vidéo (Université Lumière Lyon 2).
          <br/>
          Je me suis spécialisé dans le développement de jeux vidéo, 
          pour évoluer au sein d'un milieu qui me passionne 
          et parce que tout ce qui tourne autour du rendu d'image 
          et du game design m'intéresse énormément.
        </p>
        <div className="landing-line" />
        <span
          className="landing-info"
          onClick={() => dispatchResume({ type: 'openResume' })}
        >
          Voir mon CV
        </span>
      </Reveal>
    </section>
  );
};
